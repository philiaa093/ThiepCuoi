import cv2
import os
import numpy as np

def main():
    frames_dir = r"e:\ThiepCuoi\reference\frames\all"
    f1_path = os.path.join(frames_dir, "frame_000001.jpg")
    f1 = cv2.imread(f1_path)
    f1_gray = cv2.cvtColor(f1, cv2.COLOR_BGR2GRAY)
    
    print("Finding motion start...")
    for i in range(2, 674, 5):
        fpath = os.path.join(frames_dir, f"frame_{i:06d}.jpg")
        if not os.path.exists(fpath):
            break
        
        f = cv2.imread(fpath)
        f_gray = cv2.cvtColor(f, cv2.COLOR_BGR2GRAY)
        diff = cv2.absdiff(f1_gray, f_gray)
        mean_diff = np.mean(diff)
        
        if mean_diff > 5:
            print(f"Significant change starts around frame {i} (Diff: {mean_diff:.2f})")
            
            # Let's pinpoint exact frame
            for j in range(i-5, i+1):
                if j <= 1: continue
                fj = cv2.cvtColor(cv2.imread(os.path.join(frames_dir, f"frame_{j:06d}.jpg")), cv2.COLOR_BGR2GRAY)
                d = np.mean(cv2.absdiff(f1_gray, fj))
                print(f"Frame {j}: Diff = {d:.2f}")
            break

if __name__ == "__main__":
    main()
