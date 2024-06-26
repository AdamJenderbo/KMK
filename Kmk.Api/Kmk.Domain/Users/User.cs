﻿namespace Kmk.Domain.Users;

public class User
{
    public string Id { get; private set; }
    public string Name { get; private set; }
    public string PictureUrl { get; private set; }

    public User(string id, string name, string pictureUrl)
    {
        Id = id;
        Name = name;
        PictureUrl = pictureUrl;
    }
}