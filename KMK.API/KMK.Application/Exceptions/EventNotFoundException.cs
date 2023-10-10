namespace KMK.Application
{
    class EventNotFoundException : Exception
    {
        public EventNotFoundException() : base("Kan inte hitta händelse") { }
    }
}
