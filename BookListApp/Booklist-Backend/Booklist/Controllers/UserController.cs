using Booklist.DataLayer;
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
  [Route("api/users")] //localhost:5000/api/users
  public class UserController : ControllerBase
  {

    EfDbContext efDbContext;
    private IUserRepository userRepository;
    public UserController(IUserRepository repository)
    {
      userRepository = repository;
    }
    [HttpPost]
    [Route("add")] //localhost:5000/api/users/add
    public async Task<ActionResult<bool>> Add([FromBody] User request)
    {
      var user = new User()
      {
        email = request.email,
        password = request.password,
        firstName = request.firstName,
        lastName = request.lastName,

      };

      userRepository.Insert(user);

      var saveResult = await userRepository.SaveChangesAsync();

      return Ok(saveResult);
    }
    [HttpGet]
    [Route("login")] //localhost:44340/api/users/login
    public ActionResult<User> GetUser([FromQuery] UserDTO user )
    {
      var user1=userRepository.GetUser(user.email, user.password);
      return Ok(user1);
    }
  }
}
