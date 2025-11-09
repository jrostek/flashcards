using Framework.Core.CQRS;

namespace Cards.Contract.Queries;

public record GetCardsQuery : IQuery<string>;