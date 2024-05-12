using Kmk.Api.Domain.Arrangements;
using Kmk.Api.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Kmk.Persistence;

public class KmkContext : DbContext
{
    public DbSet<Arrangement> Arrangement { get; set; }
    public DbSet<User> User { get; set; }

    public KmkContext(DbContextOptions<KmkContext> opt) : base(opt)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Arrangement>()
                    .HasKey(x => x.SerialNumber);

        modelBuilder.Entity<Arrangement>()
                    .Property(x => x.SerialNumber)
                    .ValueGeneratedNever();

        modelBuilder.Entity<UserRole>()
                    .HasKey(x => new { x.UserId, x.Role });
    }
}