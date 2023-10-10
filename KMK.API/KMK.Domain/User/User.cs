namespace KMK.Domain
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }
        public Instrument Instrument { get; private set; }

        public List<Invite> Invites { get; private set; }

        public User(string name, string email, string password, Instrument instrument)
        {
            Id = Guid.NewGuid();
            Name = name;
            Email = email;
            Password = password;
            Instrument = instrument;
            Invites = new List<Invite>();
        }

        public void AcceptInvite(Guid eventId)
        {
            var invite = Invites.Find(x => x.EventId == eventId);

            if (invite == null)
                throw new Exception("Can not accept invite. Member not invited to event!");

            invite.Accept();
        }


        public void DeclineInvite(Guid eventId)
        {
            var invite = Invites.Find(x => x.EventId == eventId);

            if (invite == null)
                throw new Exception("Can not decline invite. Member not invited to event!");

            invite.Decline();
        }
    }
}