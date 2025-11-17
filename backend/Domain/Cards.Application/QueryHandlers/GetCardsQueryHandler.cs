using Cards.Application.Queries;

using Framework.Core.CQRS;

using Microsoft.Extensions.Logging;

namespace Cards.Application.QueryHandlers;

public class GetCardsQueryHandler(ILogger<GetCardsQueryHandler> logger)
    : IQueryHandler<GetCardsQuery, string>
{
    public ValueTask<string> Handle(GetCardsQuery request, CancellationToken cancellationToken)
    {
        logger.LogInformation("Cards requested right now!");

        return new ValueTask<string>("Cards");
    }
}