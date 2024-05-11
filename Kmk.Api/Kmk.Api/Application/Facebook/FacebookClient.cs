using Kmk.Api.Domain.Facebook;
using System.Text.Json;

namespace Kmk.Api.Application.Facebook;

public class FacebookClient
{
    HttpClient _client;

    public FacebookClient()
    {
        _client = new HttpClient();
    }

    public async Task<User?> GetUser(string accessToken)
    {
        var respone = await _client.GetAsync("https://graph.facebook.com/me?access_token=" + accessToken + "&fields=id,name,picture.type(large)");

        var stringContent = await respone.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<User>(stringContent);
    }
}