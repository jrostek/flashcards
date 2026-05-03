using FlashCards.Api.Dtos;
using FlashCards.Infrastructure;
using FlashCards.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace FlashCards.Api.Endpoints.Users;

public class AddUser : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder endpointRouteBuilder)
    {
        endpointRouteBuilder.MapPost(
            "/users",
            async ([FromBody] UserDto userDto, [FromServices] FlashCardsContext dbContext) =>
            {
                var user = new User { Email = userDto.Email, Name = userDto.Name };
                dbContext.Users.Add(user);
                await dbContext.SaveChangesAsync();
                return Results.Created($"/users/{user.Id}", user);
            }
        );
    }
}
