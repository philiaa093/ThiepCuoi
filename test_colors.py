import cv2
import numpy as np

def main():
    fpath = r"e:\ThiepCuoi\reference\frames\all\frame_000040.jpg"
    frame = cv2.imread(fpath)
    
    mid_y = frame.shape[0] // 2
    row = frame[mid_y, :]
    
    for i in range(0, frame.shape[1], 10):
        print(f"X={i}: BGR={row[i]}")

if __name__ == "__main__":
    main()
