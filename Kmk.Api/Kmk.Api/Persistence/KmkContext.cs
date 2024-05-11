using Kmk.Api.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Kmk.Persistence;

public class KmkContext : DbContext
{
    public DbSet<User> User { get; set; }

    public KmkContext(DbContextOptions<KmkContext> opt) : base(opt)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserRole>().HasKey(x => new { x.UserId, x.Role });
    }
}