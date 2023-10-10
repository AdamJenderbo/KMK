using KMK.Domain.User;
using Microsoft.EntityFrameworkCore;

namespace KMK.Data.Repositories
{
    public class UserRepository
    {
        KmkContext db;

        public UserRepository(KmkContext db) 
        {
            this.db = db;
        }

        public List<User> Get()
        {
            return db.User.ToList();
        }

        public User GetByID(Guid id)
        {
            return db.User
                .Include(user => user.Invites)
                .SingleOrDefault(user => user.Id == id);
        }

        public User GetByEmail(string email)
        {
            return db.User.FirstOrDefault(x => x.Email == email);
        }

        public void Add(User user) 
        {
            db.User.Add(user);
        }
    }
}