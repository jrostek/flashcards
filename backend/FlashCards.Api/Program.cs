using FlashCards.Infrastructure;
using FlashCards.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// EF configuration
builder.Services.AddDbContextPool<FlashCardsContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("postgres-db"),
        o => o.MigrationsAssembly("FlashCards.Migrator")));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.MapGet("/health", () => "ok");

app.MapGet("/users", async ([FromServices] FlashCardsContext dbContext) =>
await dbContext.Users.Select(u => u.Id).ToArrayAsync());

app.MapGet("/users/{userId:guid}",
    async ([FromRoute] Guid userId, [FromServices] FlashCardsContext dbContext) =>
    await dbContext.Users.SingleAsync(u => u.Id == userId));

app.MapPost("/users", async ([FromBody] UserDto userDto, [FromServices] FlashCardsContext dbContext) =>
{
    var user = new UserDto { Email = userDto.Email, Name = userDto.Name };
    dbContext.Users.Add(user);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/users/{user.Id}", user);
});

app.MapDelete("/users/{userId:guid}", async ([FromRoute] Guid userId, [FromServices] FlashCardsContext dbContext) =>
{
    var user = await dbContext.Users.SingleAsync(u => u.Id == userId);
    dbContext.Users.Remove(user);
    await dbContext.SaveChangesAsync();
});

app.Run();