namespace Kmk.Api.Domain.Arrangements;

public class Arrangement
{
    public int SerialNumber { get; set; }
    public string Title { get; set; }
    public string Composer { get; set; }
    public string Arranger { get; set; }

    public Arrangement(int serialNumber, string title, string composer, string arranger)
    {
        if (serialNumber == 0)
            throw new Exception("Serienummer får inte vara 0!");

        if (title is null || title.Length == 0)
            throw new Exception("Titel saknas!");

        if (composer is null || title.Length == 0)
            throw new Exception("Titel saknas!");

        if (arranger is null || title.Length == 0)
            throw new Exception("Titel saknas!");


        SerialNumber = serialNumber;
        Title = title;
        Composer = composer;
        Arranger = arranger;
    }
}