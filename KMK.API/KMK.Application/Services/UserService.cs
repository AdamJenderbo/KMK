using KMK.Application.DTO;
using KMK.Data;
using KMK.Data.Repositories;
using KMK.Domain.User;

namespace KMK.Application.Services
{
    public class UserService
    {
        UnitOfWork unitOfWork;
        UserRepository repository;

        public UserService(UnitOfWork unitOfWork, UserRepository repository)
        {
            this.unitOfWork = unitOfWork;
            this.repository = repository;
        }

        public Response<User> Register(RegisterUserRequest form)
        {
            if (repository.GetByEmail(form.Email) != null)
                return Response<User>.CreateFailure(ApplicationError.EMAIL_ALREADY_USED);

            User user = new User(
                form.Name, 
                form.Email, 
                form.Password, 
                form.Instrument
            );

            repository.Add(user);

            unitOfWork.Save();

            return Response<User>.CreateSuccess(user);
        }
    }
}