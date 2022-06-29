using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Booklist.DataLayer.Entities
{
    public class Book
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Year { get; set; }
        public float Rating { get; set; }
        public string Author { get; set; }
    }
}
