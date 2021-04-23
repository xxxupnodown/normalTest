from tkinter import *
from tkinter import messagebox
from focusing import camera_Open,camera_Close,takePhoto,returnName,ShowPhoto
from ReadWrite import *

port_rec = {
    "ok": "OK\r\n".encode(),
    "end": "END\r\n".encode()
}
class Application(Frame):

    def __init__(self, master=None):
        super().__init__(master)    
        self.master = master
        self.pack()
        self.createWidget()

    def createWidget(self):
        """"创建组件"""
        self.btn0l = Button(self)
        self.btn0l["text"] = "自动对焦"
        self.btn0l.pack()
        self.btn0l["command"] = self.自动对焦


        self.btnQuit = Button(self, text="退出", command=root.destroy)
        self.btnQuit.pack()

        
        global photo  
        photo = ShowPhoto()
        self.labe02 = Label(self, image=photo)
        self.labe02.pack()

        self.labe03 = Label(self, text="银川能源学院\n银智团队", borderwidth=5, relief="solid", justify="right")
        self.labe03.pack()



    def 自动对焦(self):
        '''cap = camera_Open()
        port = open_serial("/dev/ttyUSB0")
        while(port.readline() != port_rec["ok"]):
            stepper_init(port)  
        i = 1
        while (i):
            takePhoto(cap, i)
            stepper_turn(port)
            time.sleep(0.1)
            if (port.readline() == port_rec["end"]):
                break
            i = i + 1

        while(port.readline() != port_rec["ok"]):
            stepper_init(port)  

        name = int(returnName()[0:-4]) + 1
        print(name)
        for times in range(1,name):
            stepper_turn(port)
            time.sleep(0.1)
            while (port.readline() == ''):
                pass
        camera_Close(cap)
        port_close(port)'''
        messagebox.showinfo("程序正在运行...")


if __name__ == '__main__':
    root = Tk()
    root.geometry("300x300+600+600")
    root.title("camera")
    app = Application(master=root)
    root.mainloop()
