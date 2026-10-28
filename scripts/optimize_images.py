import os
from PIL import Image

def optimize_directory(base_dir):
    total_original_bytes = 0
    total_webp_bytes = 0
    total_optimized_jpg_bytes = 0
    converted_count = 0

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in [".jpg", ".jpeg", ".png"]:
                src_path = os.path.join(root, file)
                orig_size = os.path.getsize(src_path)
                total_original_bytes += orig_size

                try:
                    with Image.open(src_path) as img:
                        # Convert RGBA/P to RGB if saving to JPEG
                        rgb_img = img.convert("RGB")
                        
                        # Max dimension constraint
                        max_dimension = 1440
                        if img.width > max_dimension or img.height > max_dimension:
                            rgb_img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)

                        # 1. Generate WebP
                        webp_name = os.path.splitext(file)[0] + ".webp"
                        webp_path = os.path.join(root, webp_name)
                        rgb_img.save(webp_path, "WEBP", quality=82, method=6)
                        webp_size = os.path.getsize(webp_path)
                        total_webp_bytes += webp_size

                        # 2. Re-optimize the JPG in place as fallback (progressive, quality 80)
                        if ext in [".jpg", ".jpeg"]:
                            rgb_img.save(src_path, "JPEG", quality=80, optimize=True, progressive=True)
                            opt_jpg_size = os.path.getsize(src_path)
                            total_optimized_jpg_bytes += opt_jpg_size
                        else:
                            total_optimized_jpg_bytes += orig_size

                        converted_count += 1
                        print(f"✓ {file}: {orig_size // 1024}KB -> WebP: {webp_size // 1024}KB | Opt-JPG: {os.path.getsize(src_path) // 1024}KB")
                except Exception as e:
                    print(f"Error processing {src_path}: {e}")

    orig_mb = total_original_bytes / (1024 * 1024)
    webp_mb = total_webp_bytes / (1024 * 1024)
    jpg_mb = total_optimized_jpg_bytes / (1024 * 1024)

    print("\n==========================================")
    print(f"Total Images Processed: {converted_count}")
    print(f"Original Total Size:    {orig_mb:.2f} MB")
    print(f"Optimized JPG Fallback: {jpg_mb:.2f} MB ({(1 - jpg_mb/orig_mb)*100:.1f}% reduction)")
    print(f"New WebP Total Size:    {webp_mb:.2f} MB ({(1 - webp_mb/orig_mb)*100:.1f}% reduction)")
    print("==========================================")

if __name__ == "__main__":
    public_images_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "images"))
    print(f"Optimizing images in: {public_images_dir}")
    optimize_directory(public_images_dir)
