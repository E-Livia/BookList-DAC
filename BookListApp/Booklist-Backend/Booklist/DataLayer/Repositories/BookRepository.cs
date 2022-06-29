using Booklist.DataLayer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booklist.DataLayer.Repositories
{
  public interface IBookRepository
  {
    void Insert(Book book);
    List<Book> GetBooksByCategory();
    Task<bool> SaveChangesAsync();
  }
  public class BookRepository : IBookRepository
  {
    private EfDbContext db;
    private DbSet<Book> dbSet;
    public BookRepository(EfDbContext context)
    {
      db = context;
      dbSet = context.Set<Book>();
    }

    public List<Book> GetBooksByCategory()
    {
      throw new NotImplementedException();
    }

    public void Insert(Book book)
    {
      if (db.Entry(book).State == EntityState.Detached)
      {
        db.Attach(book);
        db.Entry(book).State = EntityState.Added;
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

