using KMK.Data.Repositories;
using KMK.Domain.User;

namespace KMK.Application.Services
{
    public class AuthenticationService
    {
        UserRepository userRepository;

        public AuthenticationService(UserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public Response<User> LogIn(Login login)
        {
            User user = userRepository.GetByEmail(login.Email);

            if (user == null)
                return Response<User>.CreateFailure("Finns ingen användare kopplad till emailaddressen!");

            bool authenticated = user.Password == login.Password;

            if (authenticated)
                return Response<User>.CreateSuccess(user);
            else
                return Response<User>.CreateFailure("Fel lösenord!");
        }
    }
}