using KMK.API;
using KMK.Application;
using KMK.Application.Services;
using KMK.Data;
using KMK.Data.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var localConnection = "Server=DESKTOP-LPG7OKD; Initial Catalog=Kmk; Trusted_Connection=true; TrustServerCertificate=True";

builder.Services.AddSqlServer<KmkContext>(localConnection, options => options.EnableRetryOnFailure());

builder.Services.AddCors(options =>
{
    options.AddPolicy("default", builder =>
    {
        builder.WithOrigins("http://localhost:3000")
        .AllowAnyHeader().WithMethods("GET", "POST", "PUT", "DELETE");
    });
});

builder.Services.AddScoped<AuthenticationService>();
builder.Services.AddScoped<EventService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<StudyCircleService>();

builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<EventRepository>();
builder.Services.AddScoped<StudyCircleRepository>();

builder.Services.AddScoped<UnitOfWork>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();
app.UseCors("default");

//app.DeleteDB();
//app.CreateDB();

app.Run();
