import cv2
import numpy as np
import os
import glob

files = glob.glob("./*_resized.jpg")

h = 224
w = 236
for file in files:
    os.remove(file)
    # img = cv2.imread(file, cv2.IMREAD_UNCHANGED)
    # new_img = cv2.resize(img, (w, h))
    # filename = os.path.splitext(os.path.basename(file))[0]
    # cv2.imwrite(f"{filename}_resized.jpg", new_img)
