using Cards.Contract.Queries;

using Framework.Core.CQRS;

namespace Cards.Application.QueryHandlers;

public class GetCardsQueryHandler : IQueryHandler<GetCardsQuery, string>
{
    public ValueTask<string> Handle(GetCardsQuery request, CancellationToken cancellationToken)
    {
        return new ValueTask<string>("Cards");
    }
}