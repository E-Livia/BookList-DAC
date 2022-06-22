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
                username = request.username,
                password = request.password,

            };

            userRepository.Insert(user);

            var saveResult = await userRepository.SaveChangesAsync();

            return Ok(saveResult);
        }
    }
}
