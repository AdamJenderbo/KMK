using KMK.Application;
using KMK.Application.Services;
using KMK.Domain.User;
using Microsoft.AspNetCore.Mvc;

namespace KMK.API.Controllers
{
    [ApiController]
    [Route("api/authentication")]
    public class AuthenticationController : ControllerBase
    {
        AuthenticationService authenticationService;

        public AuthenticationController(AuthenticationService authenticationService)
        {
            this.authenticationService = authenticationService;
        }

        [HttpPost]
        [Route("logIn")]
        public ActionResult<Response<User>> LogIn(Login login)
        {
            return Ok(authenticationService.LogIn(login));
        }
    }
}