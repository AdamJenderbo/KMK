using KMK.Domain.Event;
using System;

namespace KMK.Application.DTO
{
    public class EventView
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Canceled { get; set; }
        public List<Invite> Invites { get; set; }

        public int NoOfAnswers => Invites.Where(x => x.Answer != null).Count();

        public string DateText 
        { 
            get
            {
                bool today = Date.Date == DateTime.Now.Date;
                if (today)
                    return "Idag";

                bool thisWeek = (Date - DateTime.Now) < TimeSpan.FromDays(7) 
                                && Date.DayOfWeek < DateTime.Now.DayOfWeek;

                if(thisWeek)
                    return DayOfWeekToString(Date.DayOfWeek);

                return DayOfWeekToString(Date.DayOfWeek) + " " + Date.Day + " " + MonthToString(Date.Month) + " " + Date.Year;
            } 
        }

        public EventView(Event _event)
        {
            Id = _event.Id;
            Date = _event.Date;
            Title = _event.Title;
            Description = _event.Description;
            Canceled = _event.Canceled;
            Invites = _event.Invites.ToList();
        }

        private string DayOfWeekToString(DayOfWeek dayOfWeek)
        {
            switch(dayOfWeek)
            {
                case DayOfWeek.Monday:
                    return "Måndag";
                case DayOfWeek.Tuesday:
                    return "Tisdag";
                case DayOfWeek.Wednesday:
                    return "Onsdag";
                case DayOfWeek.Thursday:
                    return "Torsdag";
                case DayOfWeek.Friday:
                    return "Fredag";
                case DayOfWeek.Saturday:
                    return "Lördag";
                case DayOfWeek.Sunday:
                    return "Söndag";
            }
            return "";
        }

        private string MonthToString(int month)
        {
            switch (month)
            {
                case 1:
                    return "Januari";
                case 2:
                    return "Februari";
                case 3:
                    return "Mars";
                case 4:
                    return "April";
                case 5:
                    return "Maj";
                case 6:
                    return "Juni";
                case 7:
                    return "Juli";
                case 8:
                    return "Augusti";
                case 9:
                    return "September";
                case 10:
                    return "Oktober";
                case 11:
                    return "November";
                case 12:
                    return "December";
            }
            return "";
        }
    }
}