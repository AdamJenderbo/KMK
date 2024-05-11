using Kmk.Domain.Users;

namespace Kmk.Api.Application.Authentication;

public interface IJwtProvider
{
    string Generate(User user);
}
