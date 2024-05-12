using Kmk.Api.Application.Arrangements.Commands;
using Kmk.Api.Application.Arrangements.Queries;
using Kmk.Api.Domain.Arrangements;
using Kmk.Api.Domain.Users;
using Kmk.Api.Infrastructure.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Kmk.Api.Api.Controllers;

[ApiController]
[Route("api/arrangement")]
public class ArrangementController : ControllerBase
{
    [HttpPost]
    [Route("get")]
    public List<Arrangement> GetUsers(
        GetArrangementsQuery request, 
        [FromServices] GetArrangementsQueryHandler queryHandler)
    {
        return queryHandler.Handle(request);
    }

    [HttpPost]
    [Route("create")]
    //[HasRole(Role.Arrangement)]
    public CreateArrangementResponse CreateArrangement(
        CreateArrangementCommand request, 
        [FromServices] CreateArrangementCommandHandler commandHandler)
    {
        return commandHandler.Handle(request);
    }
}