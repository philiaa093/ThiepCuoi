import cv2
import sys

def to_ascii(frame):
    # Resize to 40x80
    resized = cv2.resize(frame, (80, 40))
    # Convert to grayscale
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)
    
    chars = " .:-=+*#%@"
    ascii_str = ""
    for row in gray:
        for pixel in row:
            # map 0-255 to 0-9
            idx = int(pixel / 256 * len(chars))
            ascii_str += chars[idx]
        ascii_str += "\n"
    return ascii_str

def main():
    import os
    frames_dir = r"e:\ThiepCuoi\reference\frames\all"
    
    frames_to_check = [1, 20, 40, 60, 80, 100, 120]
    
    for f in frames_to_check:
        fpath = os.path.join(frames_dir, f"frame_{f:06d}.jpg")
        if os.path.exists(fpath):
            frame = cv2.imread(fpath)
            print(f"--- Frame {f} ({frame.shape}) ---")
            print(to_ascii(frame))
            
if __name__ == "__main__":
    main()
