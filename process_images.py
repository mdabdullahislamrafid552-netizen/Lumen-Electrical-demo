import os
from PIL import Image
import shutil

src_dir = r"C:\Users\rafid\.gemini\antigravity\brain\b3ad230e-5eaf-4b79-9095-0b73ccb652bb"
dest_dir = r"C:\Users\rafid\Documents\antigravity\noble-euclid\public"

logo_src = os.path.join(src_dir, "media__1783375581401.png")
logo_dest = os.path.join(dest_dir, "logo.png")

try:
    img = Image.open(logo_src).convert("RGBA")
    
    datas = img.getdata()
    newData = []
    for item in datas:
        # Assuming background is very dark (almost black)
        if item[0] < 30 and item[1] < 30 and item[2] < 30:
            newData.append((0, 0, 0, 0)) # transparent
        else:
            newData.append(item)
    img.putdata(newData)
    
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(logo_dest, "PNG")
    print(f"Processed logo and saved to {logo_dest}")
except Exception as e:
    print(f"Error processing logo: {e}")

shutil.copy(os.path.join(src_dir, "media__1783375593886.png"), os.path.join(dest_dir, "screenshot1.png"))
shutil.copy(os.path.join(src_dir, "media__1783375607249.png"), os.path.join(dest_dir, "screenshot2.png"))

print("Images copied.")
