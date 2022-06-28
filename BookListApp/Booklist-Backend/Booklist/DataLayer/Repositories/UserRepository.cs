﻿using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Booklist.DataLayer.Entities;

namespace Booklist.DataLayer.Repositories
{
    public interface IUserRepository
    {
        void Insert(User user);
        Task<bool> SaveChangesAsync();
    }
    public class UserRepository : IUserRepository
    {
        private EfDbContext db;
        private DbSet<User> dbSet;
        public UserRepository(EfDbContext context)
        {
            db = context;
            dbSet = context.Set<User>();
        }

        public void Insert(User user)
        {
            
            if (db.Entry(user).State == EntityState.Detached)
            {
                db.Attach(user);
                db.Entry(user).State = EntityState.Added;
            }
        }

        public async Task<bool> SaveChangesAsync()
        {
            try
            {
                var savedChanges = await db.SaveChangesAsync();
                return savedChanges > 0;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
        }
    }
}