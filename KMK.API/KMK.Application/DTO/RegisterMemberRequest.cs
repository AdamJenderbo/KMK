using KMK.Domain.User;

namespace KMK.Application.DTO
{
    public class RegisterUserRequest
    {
        public string Name { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }
        public Instrument Instrument { get; private set; }
    }
}
