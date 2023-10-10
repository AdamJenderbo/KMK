namespace KMK.Domain
{
    public class Invite
    {
        public Guid Id { get; private set; }
        public Guid EventId { get; private set; }
        public Guid UserId { get; private set; }
        public InviteAnswer? Answer { get; private set; }

        private Invite() { }
        
        public Invite(Event _event, User user)
        {
            Id = Guid.NewGuid();
            UserId = user.Id;
            EventId = _event.Id;
            Answer = null;
        }

        public void Accept()
        {
            Answer = InviteAnswer.ACCEPTED;
        }

        public void Decline()
        {
            Answer = InviteAnswer.DECLINED;
        }
    }
}