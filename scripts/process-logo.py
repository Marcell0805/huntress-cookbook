"""Remove white background and recolor arrow to warm gold (#c9a227)."""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow required: pip install pillow", file=sys.stderr)
    sys.exit(1)

GOLD = (201, 162, 39)
WHITE_THRESHOLD = 242


def is_white(r: int, g: int, b: int, a: int) -> bool:
    return a < 10 or (r >= WHITE_THRESHOLD and g >= WHITE_THRESHOLD and b >= WHITE_THRESHOLD)


def is_red(r: int, g: int, b: int, a: int) -> bool:
    return a > 20 and r > 130 and g < 140 and b < 140 and r > g + 20 and r > b + 20


def flood_fill_fox(mask: list[list[bool]], px, w: int, h: int, sx: int, sy: int) -> None:
    if sx < 0 or sy < 0 or sx >= w or sy >= h:
        return
    q = deque([(sx, sy)])
    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or mask[y][x]:
            continue
        r, g, b, a = px[x, y]
        if not is_red(r, g, b, a):
            continue
        mask[y][x] = True
        q.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])


def build_fox_mask(px, w: int, h: int) -> list[list[bool]]:
    mask = [[False] * w for _ in range(h)]

    seeds = (
        (0.72, 0.30), (0.68, 0.38), (0.76, 0.42),  # body
        (0.84, 0.15), (0.80, 0.19), (0.88, 0.21), (0.82, 0.24),  # ear
        (0.74, 0.22), (0.70, 0.28),  # neck / head join
    )
    for fx, fy in seeds:
        flood_fill_fox(mask, px, w, h, int(w * fx), int(h * fy))

    # Right-side red shapes (fox silhouette) stay red even if disconnected by the arrow.
    for y in range(h):
        for x in range(w):
            if mask[y][x]:
                continue
            r, g, b, a = px[x, y]
            if not is_red(r, g, b, a):
                continue
            if x >= int(w * 0.56) and y <= int(h * 0.72):
                mask[y][x] = True

    return mask


def process(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    px = img.load()
    fox_mask = build_fox_mask(px, w, h)

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]

            if is_white(r, g, b, a):
                px[x, y] = (r, g, b, 0)
                continue

            if is_red(r, g, b, a) and not fox_mask[y][x]:
                px[x, y] = (*GOLD, a)

    img.save(dest, "PNG")
    print(f"Wrote {dest}")


if __name__ == "__main__":
    import shutil

    root = Path(__file__).resolve().parents[1]
    assets = root / "assets"
    src = assets / "fox-huntress-logo.png"
    backup = assets / "fox-huntress-logo-original.png"
    dest = assets / "fox-huntress-logo.png"

    if not src.exists():
        print(f"Missing {src}", file=sys.stderr)
        sys.exit(1)

    shutil.copy2(src, backup)
    process(src, dest)
