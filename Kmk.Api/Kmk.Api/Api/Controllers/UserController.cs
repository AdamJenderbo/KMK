using Kmk.Api.Application.Users;
using Kmk.Api.Application.Users.Commands;
using Kmk.Domain.Users;
using Microsoft.AspNetCore.Mvc;

namespace Kmk.Api.Api.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    [HttpPost]
    [Route("login")]
    public async Task<User> Login(LoginCommand request, [FromServices] LoginCommandHandler commandHandler)
        => await commandHandler.Handle(request);
}