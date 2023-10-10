namespace KMK.Application
{
    public class Response<T>
    {
        public bool Success { get; private set; }
        public string Message { get; private set; }
        public T Payload { get; private set; }

        public static Response<T> CreateSuccess(T payload)
        {
            return new Response<T> { Success = true, Payload = payload };
        }

        public static Response<T> CreateFailure(string message)
        {
            return new Response<T> { Success = false, Message = message };
        }
    }
}