using Kmk.Api.Application.Facebook;
using Kmk.Domain.Users;
using Kmk.Persistence;

namespace Kmk.Api.Application.Users.Commands;

public class LoginCommand
{
    public string AccessToken { get; set; } = string.Empty;
}

public class LoginCommandHandler
{
    FacebookClient _facebookClient;
    KmkContext _context;

    public LoginCommandHandler(FacebookClient facebookClient, KmkContext context)
    {
        _facebookClient = facebookClient;
        _context = context;
    }

    public async Task<User> Handle(LoginCommand request)
    {
        Domain.Facebook.User? facebookUser = await _facebookClient.GetUser(request.AccessToken);

        if (facebookUser == null)
            throw new Exception("Could not get Facebook user!");

        User? user = _context.User.SingleOrDefault(x => x.Id == facebookUser.Id);

        if (user is null)
        {
            user = new User(
                facebookUser.Id, 
                facebookUser.Name, 
                facebookUser.Picture.Data.Url,
                request.AccessToken);

            _context.User.Add(user);
            
            _context.SaveChanges();
        }

        return user;
    }
}