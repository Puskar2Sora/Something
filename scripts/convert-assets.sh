#!/usr/bin/env bash
set -euo pipefail

INPUT_DIR="${1:-public/assets-optimized}"
OUTPUT_DIR="${2:-optimized-assets-optimized}"
MAX_WIDTH="${3:-1600}"
IMAGE_QUALITY="${4:-82}"
VIDEO_CRF="${5:-26}"

if [[ ! -d "$INPUT_DIR" ]]; then
  echo "Input directory not found: $INPUT_DIR" >&2
  exit 1
fi

if ! command -v magick >/dev/null 2>&1; then
  echo "ImageMagick (magick) is required but not installed." >&2
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required but not installed." >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

images_done=0
videos_done=0
images_saved=0
videos_saved=0

bytes() {
  stat -c '%s' "$1" 2>/dev/null || echo 0
}

human_mb() {
  awk -v n="$1" 'BEGIN { printf "%.2f MB", n / 1024 / 1024 }'
}

convert_image() {
  local src="$1"
  local rel="${src#${INPUT_DIR}/}"
  local base="${rel%.*}"
  local out="$OUTPUT_DIR/$base.webp"

  mkdir -p "$(dirname "$out")"

  echo "[image] $src -> $out"
  magick "$src" \
    -auto-orient \
    -strip \
    -resize "${MAX_WIDTH}>" \
    -quality "$IMAGE_QUALITY" \
    -define webp:method=6 \
    -define webp:auto-filter=true \
    "$out"

  local before after
  before=$(bytes "$src")
  after=$(bytes "$out")

  images_done=$((images_done + 1))
  if (( before > after )); then
    images_saved=$((images_saved + before - after))
  fi
}

convert_video() {
  local src="$1"
  local rel="${src#${INPUT_DIR}/}"
  local base="${rel%.*}"
  local out="$OUTPUT_DIR/$base.mp4"

  mkdir -p "$(dirname "$out")"

  echo "[video] $src -> $out"
  ffmpeg -y -i "$src" \
    -map 0:v:0 -map 0:a? \
    -c:v libx264 \
    -preset slow \
    -crf "$VIDEO_CRF" \
    -vf "scale='min(iw,${MAX_WIDTH})':-2" \
    -movflags +faststart \
    -c:a aac \
    -b:a 128k \
    "$out" \
    -loglevel error -stats

  local before after
  before=$(bytes "$src")
  after=$(bytes "$out")

  videos_done=$((videos_done + 1))
  if (( before > after )); then
    videos_saved=$((videos_saved + before - after))
  fi
}

while IFS= read -r -d '' file; do
  convert_image "$file"
done < <(find "$INPUT_DIR" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

while IFS= read -r -d '' file; do
  convert_video "$file"
done < <(find "$INPUT_DIR" -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.mkv' -o -iname '*.avi' \) -print0)

echo
echo "Done."
echo "Images Converted : $images_done"
echo "Videos Converted : $videos_done"
echo "Image Savings    : $(human_mb "$images_saved")"
echo "Video Savings    : $(human_mb "$videos_saved")"
echo "Output Directory : $OUTPUT_DIR"
