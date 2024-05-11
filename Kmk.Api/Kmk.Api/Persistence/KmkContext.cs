using Kmk.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Kmk.Persistence;

public class KmkContext : DbContext
{
    public DbSet<User> User { get; set; }

    public KmkContext(DbContextOptions<KmkContext> opt) : base(opt)
    {

    }
}