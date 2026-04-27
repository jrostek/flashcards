using FlashCards.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlashCards.Api.Endpoints.Users;

public class GetUsers : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder endpointRouteBuilder)
    {
        endpointRouteBuilder.MapGet(
            "/users",
            async ([FromServices] FlashCardsContext dbContext) =>
            await dbContext.Users.Select(u => u.Id).ToArrayAsync()
        );
    }
}
