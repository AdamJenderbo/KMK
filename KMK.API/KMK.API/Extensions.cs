using KMK.Application;
using KMK.Data;

namespace KMK.API
{
    public static class Extensions
    {
        public static void CreateDB(this IHost host)
        {
            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;
            var db = services.GetRequiredService<KmkContext>();

            db.Database.EnsureCreated();

            DBInitializer.InitializeDatabase(db);
        }

        public static void DeleteDB(this IHost host)
        {
            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;
            var db = services.GetRequiredService<KmkContext>();

            db.Database.EnsureDeleted();
        }
    }
}
