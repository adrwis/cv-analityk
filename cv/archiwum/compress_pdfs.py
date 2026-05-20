"""Compress all CV PDFs in current folder to under 2 MB by downsampling/recompressing images."""
import sys
from pathlib import Path
from io import BytesIO

import pikepdf
from pikepdf import PdfImage, Name
from PIL import Image

TARGET_BYTES = 2 * 1024 * 1024  # 2 MB
ATTEMPTS = [
    # (max_dim, jpeg_quality)
    (1400, 78),
    (1200, 72),
    (1000, 65),
    (900, 58),
    (800, 50),
    (700, 45),
]


def recompress_pdf(src: Path, dst: Path, max_dim: int, quality: int) -> int:
    with pikepdf.open(src) as pdf:
        seen = set()
        for page in pdf.pages:
            for _, raw in page.images.items():
                if raw.objgen in seen:
                    continue
                seen.add(raw.objgen)
                try:
                    pdf_image = PdfImage(raw)
                    pil = pdf_image.as_pil_image()
                except Exception:
                    continue

                if pil.mode not in ("RGB", "L"):
                    pil = pil.convert("RGB")

                if max(pil.size) > max_dim:
                    pil.thumbnail((max_dim, max_dim), Image.LANCZOS)

                buf = BytesIO()
                if pil.mode == "L":
                    pil.save(buf, format="JPEG", quality=quality, optimize=True)
                else:
                    pil.convert("RGB").save(buf, format="JPEG", quality=quality, optimize=True, progressive=True)

                raw.write(buf.getvalue(), filter=Name.DCTDecode)

        pdf.save(
            dst,
            compress_streams=True,
            object_stream_mode=pikepdf.ObjectStreamMode.generate,
            recompress_flate=True,
        )
    return dst.stat().st_size


def compress_one(src: Path) -> tuple[bool, int, int, str]:
    original = src.stat().st_size
    if original <= TARGET_BYTES:
        return True, original, original, "skip (already <=2MB)"

    tmp = src.with_suffix(".tmp.pdf")
    best = None  # (size, max_dim, q)
    for max_dim, q in ATTEMPTS:
        try:
            size = recompress_pdf(src, tmp, max_dim, q)
        except Exception as e:
            return False, original, original, f"error: {e}"
        if best is None or size < best[0]:
            best = (size, max_dim, q)
        if size <= TARGET_BYTES:
            tmp.replace(src)
            return True, original, size, f"ok @ {max_dim}px/q{q}"

    # No attempt got under 2MB — keep the smallest
    if best:
        # Re-run best to ensure tmp matches
        size = recompress_pdf(src, tmp, best[1], best[2])
        tmp.replace(src)
        return False, original, size, f"best effort {best[1]}px/q{best[2]}"
    if tmp.exists():
        tmp.unlink()
    return False, original, original, "no attempt succeeded"


def main():
    folder = Path(__file__).parent
    pdfs = sorted(folder.glob("*.pdf"))
    print(f"Found {len(pdfs)} PDFs in {folder}\n")
    print(f"{'File':<70} {'Before':>10} {'After':>10}  Status")
    print("-" * 110)
    for pdf in pdfs:
        ok, before, after, status = compress_one(pdf)
        b_mb = before / 1024 / 1024
        a_mb = after / 1024 / 1024
        flag = "OK " if ok else "WARN"
        print(f"{pdf.name:<70} {b_mb:>7.2f} MB {a_mb:>7.2f} MB  [{flag}] {status}")


if __name__ == "__main__":
    main()
