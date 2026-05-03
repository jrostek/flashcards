using FlashCards.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlashCards.Api.Endpoints.Users;

public class DeleteUser : IEndpoint
{
    public void MapEndpoint(IEndpointRouteBuilder endpointRouteBuilder)
    {
        endpointRouteBuilder.MapDelete(
            "/users/{userId:guid}",
            async ([FromRoute] Guid userId, [FromServices] FlashCardsContext dbContext) =>
            {
                var user = await dbContext.Users.SingleAsync(u => u.Id == userId);
                dbContext.Users.Remove(user);
                await dbContext.SaveChangesAsync();
            }
        );
    }
}
