namespace Kmk.Api.Domain.Users;

public class User
{
    public string Id { get; private set; }
    public string Name { get; private set; }
    public string PictureUrl { get; private set; }
    public string FacebookAccessToken { get; private set; }
    public List<UserRole> Roles { get; private set; }

    public User(string id, string name, string pictureUrl, string facebookAccessToken)
    {
        Id = id;
        Name = name;
        PictureUrl = pictureUrl;
        FacebookAccessToken = facebookAccessToken;
        Roles = new List<UserRole>();
    }

    public bool HasRole(Role role)
    {
        return Roles.Any(x => x.Role == role);
    }
}