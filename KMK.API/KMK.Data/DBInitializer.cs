using KMK.Data;
using KMK.Domain.Event;
using KMK.Domain.User;

namespace KMK.Application
{
    public class DBInitializer
    {
        public static void InitializeDatabase(KmkContext db)
        {
            if (db.Event.Any())
                return;

            db.Event.Add(new Event (
                new DateTime(2023, 8, 12),
                "Sekelskiftesdagarna", 
                "Speling på Marstrand under Sekelskiftesdagarna"
            ));

            db.User.Add(new User(
                "Adam Jenderbo",
                "adam.jenderbo@gmail.com",
                "Passwd",
                Instrument.TROMBONE
            ));

            db.SaveChanges();
        }
    }
}