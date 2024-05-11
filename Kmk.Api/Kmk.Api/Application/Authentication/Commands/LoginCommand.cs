using Kmk.Api.Application.Facebook;
using Kmk.Domain.Users;
using Kmk.Persistence;

namespace Kmk.Api.Application.Authentication.Commands;

public class LoginCommand
{
    public string AccessToken { get; set; } = string.Empty;
}

public class LoginCommandHandler
{
    FacebookClient _facebookClient;
    KmkContext _context;
    IJwtProvider _jwtProvider;

    public LoginCommandHandler(FacebookClient facebookClient, KmkContext context, IJwtProvider jwtProvider)
    {
        _facebookClient = facebookClient;
        _context = context;
        _jwtProvider = jwtProvider;
    }

    public async Task<AuthenticationResponse> Handle(LoginCommand request)
    {
        Domain.Facebook.User? facebookUser = await _facebookClient.GetUser(request.AccessToken);

        if (facebookUser == null)
            return new AuthenticationResponse
            {
                IsSuccess = false,
                Message = "Misslyckades att logga in!"
            };

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

        string token = _jwtProvider.Generate(user);

        return new AuthenticationResponse
        {
            IsSuccess = true,
            Token = token,
            UserId = user.Id,
            UserName = user.Name,
            UserPictureUrl = user.PictureUrl
        };
    }
}