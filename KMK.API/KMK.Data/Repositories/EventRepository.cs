using KMK.Domain.Event;
using Microsoft.EntityFrameworkCore;

namespace KMK.Data.Repositories
{
    public class EventRepository
    {
        KmkContext db;

        public EventRepository(KmkContext db) 
        {
            this.db = db;
        }

        public List<Event> Get()
        {
            return db.Event
                .Where(e => !e.Canceled)
                .OrderBy(e => e.Date)
                .ToList();
        }

        public Event GetByID(Guid id)
        {
            return db.Event
                .Include(e => e.Invites)
                .SingleOrDefault(x => x.Id == id);
        }

        public void Add(Event e) 
        {
            db.Event.Add(e);
        }

        public void Remove(Guid id)
        {
            var e = db.Event.SingleOrDefault(x => x.Id == id);
            db.Event.Remove(e);
        }

        public void Remove(Event e) 
        {
            db.Event.Remove(e);
        }
    }
}
