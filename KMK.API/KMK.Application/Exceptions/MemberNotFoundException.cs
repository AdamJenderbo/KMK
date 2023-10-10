using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KMK.Application
{
    internal class MemberNotFoundException : Exception
    {
        public MemberNotFoundException() : base("Kan inte hitta medlem") 
        { 
        }
    }
}
