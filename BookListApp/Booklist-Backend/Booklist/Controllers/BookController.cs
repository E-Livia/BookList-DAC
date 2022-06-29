using Booklist.DataLayer.Entities;
using Booklist.DataLayer.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booklist.Controllers
{
  [ApiController]
  [Route("api/books")] //localhost:5000/api/books
  public class BookController : ControllerBase
  {


    private IBookRepository bookRepository;
    public BookController(IBookRepository repository)
    {
      bookRepository = repository;
    }
    [HttpPost]
    [Route("add")] //localhost:5000/api/Books/add
    public async Task<ActionResult<bool>> Add([FromBody] Book request)
    {
      var book = new Book()
      {
        Author = request.Author,
        Description = request.Description,
        Year = request.Year,
        Title = request.Title,
        Rating = request.Rating,
      };

      bookRepository.Insert(book);

      var saveResult = await bookRepository.SaveChangesAsync();

      return Ok(saveResult);
    }
    [HttpGet]
    [Route("get/all")]
    public ActionResult<List<Book>> GetAllBooks()
    {
      var books = bookRepository.GetAllBooks();
      return Ok(books);
    }
    [HttpGet]
    [Route("get/category")]
    public ActionResult<List<Book>> GetBooksByCategory()
    {
      var books = bookRepository.GetBooksByCategory(); 
      return Ok(books);
    }
  }
}
