using System.Text.Json.Serialization;

namespace Kmk.Domain.Facebook;

public class Picture
{
    [JsonPropertyName("data")]
    public PictureData Data { get; set; }
}