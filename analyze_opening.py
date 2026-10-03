import cv2
import os
import numpy as np

def get_background_color(frame):
    # Assume the corners are background
    corners = [
        frame[10:50, 10:50],
        frame[-50:-10, 10:50],
        frame[10:50, -50:-10],
        frame[-50:-10, -50:-10]
    ]
    colors = [np.mean(c, axis=(0,1)) for c in corners]
    return np.mean(colors, axis=0)

def find_boundaries(frame, bg_color, threshold=30):
    h, w, _ = frame.shape
    mid_y = h // 2
    
    # We look at the middle row, maybe average over a few rows
    row = np.mean(frame[mid_y-5:mid_y+5, :], axis=0)
    
    # Diff from bg color
    diff = np.linalg.norm(row - bg_color, axis=1)
    
    non_bg = np.where(diff > threshold)[0]
    
    if len(non_bg) == 0:
        return w//2, w//2, 0
        
    left = non_bg[0]
    right = non_bg[-1]
    
    return left, right, right - left

def main():
    frames_dir = r"e:\ThiepCuoi\reference\frames\all"
    
    # First, let's find the background color from frame 1
    f1_path = os.path.join(frames_dir, "frame_000001.jpg")
    f1 = cv2.imread(f1_path)
    bg_color = get_background_color(f1)
    print(f"Background color (BGR): {bg_color}")
    
    print("Frame | Time | Left edge | Right edge | Reveal width")
    print("----- | ---- | --------- | ---------- | ------------")
    
    fps = 30.0
    
    # Analyze first 120 frames
    for i in range(1, 150):
        fname = f"frame_{i:06d}.jpg"
        fpath = os.path.join(frames_dir, fname)
        if not os.path.exists(fpath):
            break
            
        frame = cv2.imread(fpath)
        left, right, width = find_boundaries(frame, bg_color)
        
        time_sec = (i-1) / fps
        print(f"{i:03d} | {time_sec:04.2f}s | {left:4d} | {right:4d} | {width:4d}")

if __name__ == "__main__":
    main()
