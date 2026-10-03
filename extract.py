import cv2
import os
import math
import numpy as np
import sys

def main():
    try:
        import cv2
    except ImportError:
        print("cv2 not installed. Run: pip install opencv-python")
        sys.exit(1)
        
    video_path = r"e:\ThiepCuoi\TaiNguyen\snaptik.vn_7645319350437678343.mp4"
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print("Error opening video stream or file")
        return
        
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = frame_count / fps if fps > 0 else 0
    
    print(f"Video Info: FPS={fps}, Frame Count={frame_count}, Duration={duration:.2f}s")
    
    frames_dir = r"e:\ThiepCuoi\reference\frames\all"
    sheets_dir = r"e:\ThiepCuoi\reference\contact-sheets"
    os.makedirs(frames_dir, exist_ok=True)
    os.makedirs(sheets_dir, exist_ok=True)
    
    current_frame = 0
    frames = []
    
    print("Extracting frames...")
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        current_frame += 1
        frame_filename = os.path.join(frames_dir, f"frame_{current_frame:06d}.jpg")
        
        # Save original frame
        cv2.imwrite(frame_filename, frame)
        
        # Keep frame for contact sheet
        frames.append((current_frame, frame))
        
    cap.release()
    print(f"Extracted {current_frame} frames.")
    
    # Generate contact sheets (approx 20-30 frames each). Let's use 25 frames (5x5 grid)
    print("Generating contact sheets...")
    frames_per_sheet = 25
    grid_cols = 5
    grid_rows = 5
    
    for i in range(0, len(frames), frames_per_sheet):
        batch = frames[i:i+frames_per_sheet]
        sheet_idx = i // frames_per_sheet + 1
        
        # Resize frames for contact sheet to make it manageable, e.g., width=320, height proportional
        target_w = 320
        target_h = int(batch[0][1].shape[0] * (target_w / batch[0][1].shape[1]))
        
        sheet_w = grid_cols * target_w
        sheet_h = grid_rows * target_h
        
        sheet = np.zeros((sheet_h, sheet_w, 3), dtype=np.uint8)
        
        for j, (frame_num, frame) in enumerate(batch):
            row = j // grid_cols
            col = j % grid_cols
            
            resized = cv2.resize(frame, (target_w, target_h))
            
            # Add label: frame number and timestamp
            timestamp = frame_num / fps if fps > 0 else 0
            label = f"F:{frame_num} T:{timestamp:.2f}s"
            
            # Draw label background
            cv2.rectangle(resized, (0, target_h-30), (target_w, target_h), (0,0,0), -1)
            # Draw text
            cv2.putText(resized, label, (5, target_h-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255,255,255), 1)
            
            sheet[row*target_h:(row+1)*target_h, col*target_w:(col+1)*target_w] = resized
            
        sheet_filename = os.path.join(sheets_dir, f"sheet_{sheet_idx:03d}.jpg")
        cv2.imwrite(sheet_filename, sheet)
        
    print(f"Generated {math.ceil(len(frames) / frames_per_sheet)} contact sheets.")

if __name__ == "__main__":
    main()
