
namespace KMK.Domain
{
    public class Event
    {
        public Guid Id { get; set; }
        public DateTime Date { get; private set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Canceled { get; private set; }
        public List<Invite> Invites { get; private set; }

        public Event(DateTime date, string title, string description)
        {
            Id = Guid.NewGuid();
            Date = date;
            Title = title;
            Description = description;
            Canceled = false;
            Invites = new List<Invite>();
        }

        public void Invite(User user)
        {
            if(IsInvited(user))
                throw new Exception("Can not invite user. User already invited!");

            Invites.Add(new Invite(this, user));
        }

        public void Cancel()
        {
            if (DateTime.Now > Date)
                throw new Exception("Can not cancel event. Event already happened");

            if (Canceled)
                throw new Exception("Can not cancel event. Event already canceled");

            Canceled = true;
            Invites.Clear();
        }

        private bool IsInvited(User user)
        {
            return Invites.Any(invite => invite.UserId == user.Id);
        }
    }
}