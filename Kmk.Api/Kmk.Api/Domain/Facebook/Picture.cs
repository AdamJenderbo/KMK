using System.Text.Json.Serialization;

namespace Kmk.Api.Domain.Facebook;

public class Picture
{
    [JsonPropertyName("data")]
    public PictureData Data { get; set; }
}