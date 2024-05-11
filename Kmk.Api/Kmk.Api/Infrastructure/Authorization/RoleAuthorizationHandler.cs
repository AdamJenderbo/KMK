﻿using Kmk.Api.Application.Users;
using Kmk.Api.Domain.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.JsonWebTokens;

namespace Kmk.Api.Infrastructure.Authorization;

public class RoleAuthorizationHandler : AuthorizationHandler<RoleRequirement>
{
    IServiceScopeFactory _serviceScopeFactory;

    public RoleAuthorizationHandler(IServiceScopeFactory serviceScopeFactory)
    {
        _serviceScopeFactory = serviceScopeFactory;
    }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, RoleRequirement requirement)
    {
        var claim = context.User.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Sub);

        string? userId = claim?.Value;

        if(userId == null)
            return;

        using IServiceScope scope = _serviceScopeFactory.CreateScope();

        UserService userService = scope.ServiceProvider.GetRequiredService<UserService>();

        User user = userService.GetUser(userId);

        if (user.HasRole(requirement.Role))
            context.Succeed(requirement);
    }
}
