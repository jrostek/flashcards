using Framework.Core.CQRS;

namespace Cards.Application.Queries;

public record GetCardsQuery : IQuery<string>;