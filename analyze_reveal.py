import cv2
import os
import numpy as np

def is_burgundy(pixel):
    b, g, r = pixel
    return r > 80 and g < 30 and b < 30

def find_reveal_boundaries(frame):
    h, w, _ = frame.shape
    mid_y = h // 2
    row = frame[mid_y, :]
    
    # We expect letterbox on the left and right
    # Let's find the inner region (where the website is)
    # The website seems to start around X=70 and end around X=500, but let's just look at the whole row.
    
    # Is the center pixel burgundy?
    center_is_burgundy = is_burgundy(row[w//2])
    
    # Find the contiguous non-burgundy region in the center
    # Start from center and go left
    left = w//2
    while left > 0 and not is_burgundy(row[left]):
        left -= 1
        
    right = w//2
    while right < w-1 and not is_burgundy(row[right]):
        right += 1
        
    if center_is_burgundy:
        return -1, -1, 0  # No reveal in the center
    else:
        return left, right, right - left

def main():
    frames_dir = r"e:\ThiepCuoi\reference\frames\all"
    
    print("Frame | Time | Left edge | Right edge | Reveal width")
    print("----- | ---- | --------- | ---------- | ------------")
    
    fps = 30.0
    
    for i in range(1, 150):
        fpath = os.path.join(frames_dir, f"frame_{i:06d}.jpg")
        if not os.path.exists(fpath):
            break
            
        frame = cv2.imread(fpath)
        left, right, width = find_reveal_boundaries(frame)
        
        time_sec = (i-1) / fps
        print(f"{i:03d} | {time_sec:04.2f}s | {left:4d} | {right:4d} | {width:4d}")

if __name__ == "__main__":
    main()
