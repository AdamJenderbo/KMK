using Kmk.Api.Application.Arrangements.Commands;
using Kmk.Api.Application.Arrangements.Queries;
using Kmk.Api.Application.Authentication;
using Kmk.Api.Application.Authentication.Commands;
using Kmk.Api.Application.Facebook;
using Kmk.Api.Application.Users;
using Kmk.Api.Application.Users.Queries;
using Kmk.Api.Infrastructure.Authentication;
using Kmk.Api.Infrastructure.Authorization;
using Kmk.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

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


// Authentication
builder.Services.ConfigureOptions<JwtOptionsSetup>();
builder.Services.ConfigureOptions<JwtBearerOptionsSetup>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer();

builder.Services.AddScoped<IJwtProvider, JwtProvider>();

// Authorization
builder.Services.AddAuthorization();
builder.Services.AddSingleton<IAuthorizationHandler, RoleAuthorizationHandler>();
builder.Services.AddSingleton<IAuthorizationPolicyProvider, RoleAuthorizationPolicyProvider>();

// Clients
builder.Services.AddScoped<FacebookClient>();

// Commands
builder.Services.AddScoped<LoginCommandHandler>();
builder.Services.AddScoped<CreateArrangementCommandHandler>();

// Queries
builder.Services.AddScoped<GetArrangementsQueryHandler>();
builder.Services.AddScoped<GetUsersQueryHandler>();

// Services
builder.Services.AddScoped<UserService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.UseCors("default");

app.Run();
