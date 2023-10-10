using KMK.Application.DTO;
using KMK.Data;
using KMK.Data.Repositories;
using KMK.Domain.Event;

namespace KMK.Application.Services
{
    public class EventService
    {
        UnitOfWork unitOfWork;
        EventRepository eventRepository;
        UserRepository userRepository;

        public EventService(UnitOfWork unitOfWork, EventRepository eventRepository, UserRepository userRepository)
        {
            this.unitOfWork = unitOfWork;
            this.eventRepository = eventRepository;
            this.userRepository = userRepository;
        }

        public IEnumerable<Event> Get()
        {
            return eventRepository.Get();
        }

        public EventView Get(Guid id)
        {
            var _event = eventRepository.GetByID(id);
            return new EventView(_event);
        }

        public Event Create(EventCreateRequest request)
        {
            var _event = new Event(
                request.Date, 
                request.Title, 
                request.Description);

            eventRepository.Add(_event);

            var users = userRepository.Get();

            foreach (var user in users) 
                _event.Invite(user);

            unitOfWork.Save();

            return _event;
        }

        public void Update(Guid id, EventUpdateRequest request)
        {
            var _event = eventRepository.GetByID(id);

            _event.Title = request.Title;
            _event.Description = request.Description;

            unitOfWork.Save();
        }

        public void Cancel(Guid id)
        {
            var _event = eventRepository.GetByID(id);

            _event.Cancel();

            unitOfWork.Save();
        }

        public void AcceptInvite(Guid eventId, Guid userId)
        {
            var user = userRepository.GetByID(userId);

            user.AcceptInvite(eventId);

            unitOfWork.Save();
        }

        public void DeclineInvite(Guid eventId, Guid userId)
        {
            var user = userRepository.GetByID(userId);

            user.DeclineInvite(eventId);

            unitOfWork.Save();
        }
    }
}