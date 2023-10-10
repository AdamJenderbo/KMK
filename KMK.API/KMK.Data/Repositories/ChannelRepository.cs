using KMK.Domain.Chat;

namespace KMK.Data.Repositories
{
    public class ChannelRepository : Repository<Channel>
    {
        public ChannelRepository(KmkContext db) : base(db)
        {
        }
    }
}
