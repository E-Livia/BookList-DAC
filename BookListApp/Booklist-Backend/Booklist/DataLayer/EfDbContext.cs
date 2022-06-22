﻿using Booklist.DataLayer.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booklist.DataLayer
{
    public class EfDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<UserBooks> UserBooks { get; set; }

        public EfDbContext()
        {
            DbContextOptions options = new DbContextOptionsBuilder().UseSqlServer("Data Source=localhost\\SQLEXPRESS; Database=Booklist; Trusted_Connection=True").Options;
        }
        public EfDbContext(DbContextOptions<EfDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.Development.json")
                   .Build();
                var connectionString = "Data Source=localhost\\SQLEXPRESS; Database=Booklist; Trusted_Connection=True";
                optionsBuilder.UseSqlServer(connectionString);
            }
        }
    }
}
