using KMK.Application;
using KMK.Application.DTO;
using KMK.Application.Services;
using KMK.Data.Repositories;
using KMK.Domain.User;
using Microsoft.AspNetCore.Mvc;

namespace KMK.API.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        UserService service;
        UserRepository repository;

        public UserController(UserService service, UserRepository repository)
        {
            this.service = service;
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult<User> Get()
        {
            return Ok(repository.Get());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<User> Get(Guid id)
        {
            return Ok(repository.GetByID(id));
        }

        [HttpPost]
        [Route("register")]
        public ActionResult<Response<User>> Register(RegisterUserRequest form)
        {
            return Ok(service.Register(form));
        }
    }
}
