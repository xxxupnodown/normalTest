using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace fuwuduankou
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private TcpListener listen;
        StreamReader sr;
        Socket socket;
        private void button1_Click(object sender, EventArgs e)
        {
            listen = new TcpListener(IPAddress.Any, int.Parse(this.textBox1.Text));
            listen.Start();
            MessageBox.Show("侦听成功");
            socket = listen.AcceptSocket();
            NetworkStream nws = new NetworkStream(socket);
            sr = new StreamReader(nws);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.textBox2.Text += sr.ReadLine();
        }
    }
}
