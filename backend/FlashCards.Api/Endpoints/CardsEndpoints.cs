using Cards.Application.Queries;

using Framework.Core.CQRS;

namespace FlashCards.Api.Endpoints;

public static class CardsEndpoints
{
    public static void Configure(WebApplication app)
    {
        RouteGroupBuilder cardsItems = app.MapGroup("/cards");

        cardsItems.MapGet("/", async (IQueryBroker queryBroker, CancellationToken cancellationToken) =>
        {
            GetCardsQuery query = new();
            return await queryBroker.Send(query, cancellationToken);
        });
    }
}