using System;
using System.Windows.Forms;

namespace zhangdan
{
    public partial class UserControl1 : UserControl
    {
        public UserControl1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form 会员 = new Form();
            会员.ShowDialog();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form 账单 = new Form();
            账单.ShowDialog();
        }
    }
}
