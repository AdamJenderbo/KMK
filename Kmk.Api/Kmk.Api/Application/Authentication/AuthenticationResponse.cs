namespace Kmk.Api.Application.Authentication;

public class AuthenticationResponse
{
    public bool IsSuccess { get; set; }
    public string? Message { get; set; }
    public string? Token { get; set; }
    public string? UserId { get; set; }
    public string? UserName { get; set; }
    public string? UserPictureUrl { get; set; }
}