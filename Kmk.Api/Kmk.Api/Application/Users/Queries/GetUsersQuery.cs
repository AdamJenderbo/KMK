using Kmk.Domain.Users;
using Kmk.Persistence;

namespace Kmk.Api.Application.Users.Queries;

public class GetUsersQuery
{
}

public class GetUsersQueryHandler
{
    KmkContext _context;

    public GetUsersQueryHandler(KmkContext context)
    {
        _context = context;
    }

    public List<User> Handle(GetUsersQuery request)
    {
        return _context.User.ToList();
    }
}