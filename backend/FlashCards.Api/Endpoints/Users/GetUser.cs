using FlashCards.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlashCards.Api.Endpoints.Users;

public class GetUser : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder endpointRouteBuilder)
    {
        endpointRouteBuilder.MapGet(
            "/users/{userId:guid}",
            async ([FromRoute] Guid userId, [FromServices] FlashCardsContext dbContext) =>
            await dbContext.Users.SingleAsync(u => u.Id == userId)
        );
    }
}
