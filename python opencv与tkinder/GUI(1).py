import tkinter as tk
import tkinter.messagebox
import os
from main import *
import cv2 as cv
from PIL import ImageTk
from PIL import Image

cap = 启动相机()

def catall(cap):
    cap.release()
    win.destroy()
def updateWin(cap, canvas):
    while(True):
        ret, frame = cap.read()
        cov = cv.cvtColor(frame, cv.COLOR_RGB2BGR)
        img = Image.fromarray(cov)
        img = ImageTk.PhotoImage(img)
        canvas.create_image(0,0, anchor='nw', image = img)
        canvas.pack()
        win.update()

    
win = tk.Tk()
win.geometry('700x620+350+30')
win.title('蔬果')

imgBtn1 = tk.PhotoImage(file=r"C:\Users\Think\Desktop\识别\logo\Button1.png")
imgBtn2 = tk.PhotoImage(file=r"C:\Users\Think\Desktop\识别\logo\Button2.png")

Log = tk.Text(win,
                bd=0,
                height=5,
                bg='#87CEEB',
                highlightthickness=5,
                highlightbackground='#AFFEEE',
                highlightcolor='#6495ED',
                undo = True)
Log.place(x=60, y=410)

canvas = tk.Canvas(win,
                   width=670,
                   height=390)
canvas.place(x=10, y= 10)


Start = tk.Button(win,bd=0, image=imgBtn1, command = lambda: kaishi(cap, Log))
Start.place(x=40,y=500)

Exit = tk.Button(win,bd=0,image=imgBtn2, command= lambda: catall(cap))
Exit.place(x=410,y=500)

updateWin(cap, canvas)       
win.mainloop()
