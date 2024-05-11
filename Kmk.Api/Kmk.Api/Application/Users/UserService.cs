using Kmk.Api.Domain.Users;
using Kmk.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Kmk.Api.Application.Users;

public class UserService
{
    KmkContext _context;

    public UserService(KmkContext context)
    {
        _context = context;
    }

    public User GetUser(string id)
    {
        return _context.User
            .Include(x => x.Roles)
            .Single(x => x.Id == id);
    }
}
