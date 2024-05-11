using System.Text.Json.Serialization;

namespace Kmk.Api.Domain.Facebook;

public class User
{
    [JsonPropertyName("id")]
    public string Id { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonPropertyName("picture")]
    public Picture Picture { get; set; }
}