using KMK.Application.DTO;
using KMK.Application.Services;
using KMK.Domain.Event;
using Microsoft.AspNetCore.Mvc;

namespace KMK.API.Controllers
{
    [ApiController]
    [Route("api/event")]
    public class EventController : ControllerBase
    {
        EventService eventService;

        public EventController(EventService eventService)
        {
            this.eventService = eventService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Event>> GetEvents()
        {
            return Ok(eventService.Get());
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<EventView> Get(Guid id)
        {
            return Ok(eventService.Get(id));
        }

        [HttpPost]
        [Route("create")]
        public ActionResult<Event> CreateEvent(EventCreateRequest request)
        {
            return Ok(eventService.Create(request));
        }

        [HttpPost]
        [Route("update")]
        public ActionResult<Event> UpdateEvent(Guid id, EventUpdateRequest request)
        {
            eventService.Update(id, request);
            return Ok();
        }

        [HttpPost]
        [Route("cancel/{id}")]
        public ActionResult<Event> CancelEvent(Guid id)
        {
            eventService.Cancel(id);
            return Ok();
        }

        [HttpPost]
        [Route("accept/{eventId}/{userId}")]
        public ActionResult<Event> AcceptInvite(Guid eventId, Guid userId)
        {
            eventService.AcceptInvite(eventId, userId);
            return Ok();
        }

        [HttpPost]
        [Route("decline/{eventId}/{userId}")]
        public ActionResult<Event> DeclineInvite(Guid eventId, Guid userId)
        {
            eventService.DeclineInvite(eventId, userId);
            return Ok();
        }
    }
}
