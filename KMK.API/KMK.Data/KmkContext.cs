using KMK.Domain.Event;
using KMK.Domain.StudyCircle;
using KMK.Domain.User;
using Microsoft.EntityFrameworkCore;

namespace KMK.Data
{
    public class KmkContext : DbContext
    {
        public DbSet<Event> Event { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<StudyCircle> StudyCircle { get; set; }

        public KmkContext(DbContextOptions<KmkContext> opt) : base(opt)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudyCircle>()
                .HasMany<User>("members")
                .WithOne();
        }
    }
}
