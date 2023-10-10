
namespace KMK.Data
{
    public class UnitOfWork
    {
        KmkContext db;

        public UnitOfWork(KmkContext db)
        {
            this.db = db;
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}