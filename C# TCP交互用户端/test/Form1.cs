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

namespace test
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        NetworkStream nws;
        StreamWriter sw;
        private void button1_Click(object sender, EventArgs e)
        {
            TcpClient client = new TcpClient();
            client.Connect(IPAddress.Parse("192.168.43.57"), int.Parse(this.textBox1.Text));
            MessageBox.Show("连接成功");
            nws = client.GetStream();
            sw = new StreamWriter(nws);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            
        }

        private void close_Click(object sender, EventArgs e)
        {
            TcpClient client = new TcpClient();
            client.Close();
        }

        private void button2_Click_1(object sender, EventArgs e)
        {
            sw.WriteLine(this.textBox2.Text);
            sw.Flush();
        }
    }
}
