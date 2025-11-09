using Mediator;

namespace Framework.Core.CQRS;

public interface IQuery<out T> : IRequest<T>
{
}