using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace KMK.Data.Repositories
{
    public class Repository<T> where T : class
    {
        KmkContext db;
        protected DbSet<T> table;

        public Repository(KmkContext db)
        {
            this.db = db;
            table = db.Set<T>();
        }

        public virtual IEnumerable<T> Get(
            Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<T> query = table;

            if (filter != null)
                query = query.Where(filter);

            foreach (var includeProperty in includeProperties.Split(
                new char[] { ',' }, 
                StringSplitOptions.RemoveEmptyEntries
            ))
                query = query.Include(includeProperty);

            if (orderBy != null)
                return orderBy(query).ToList();
            else
                return query.ToList();
        }

        public virtual T GetByID(Guid id)
        {
            return table.Find(id);
        }

        public virtual void Add(T entity)
        {
            table.Add(entity);
        }

        public virtual void Remove(Guid id)
        {
            T entityToRemove = GetByID(id);
            Remove(entityToRemove);
        }

        public virtual void Remove(T entityToRemove)
        {
            if (db.Entry(entityToRemove).State == EntityState.Detached)
                table.Attach(entityToRemove);

            table.Remove(entityToRemove);
        }
    }
}
