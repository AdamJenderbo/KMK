using Kmk.Api.Application.Authentication;
using Kmk.Api.Application.Authentication.Commands;
using Kmk.Api.Application.Users.Queries;
using Kmk.Api.Domain.Users;
using Kmk.Api.Infrastructure.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Kmk.Api.Api.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    [HttpPost]
    [Route("login")]
    [AllowAnonymous]
    public async Task<AuthenticationResponse> Login(LoginCommand request, [FromServices] LoginCommandHandler commandHandler)
        => await commandHandler.Handle(request);

    [HttpGet]
    [HasRole(Role.Admin)]
    public List<User> GetUsers([FromServices] GetUsersQueryHandler queryHandler)
        => queryHandler.Handle(new GetUsersQuery());
}