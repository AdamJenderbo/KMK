﻿using System.Text.Json.Serialization;

namespace Kmk.Domain.Facebook;

public class PictureData
{
    [JsonPropertyName("width")]
    public int Width { get; set; }

    [JsonPropertyName("height")]
    public int Height { get; set; }

    [JsonPropertyName("is_silhouette")]
    public bool IsSilhouette { get; set; }

    [JsonPropertyName("url")]
    public string Url { get; set; }
}