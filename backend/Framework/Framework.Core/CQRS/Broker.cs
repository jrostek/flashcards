using Mediator;

namespace Framework.Core.CQRS;

public class Broker(IMediator mediator) : IQueryBroker
{
    public async ValueTask<TResponse> Send<TResponse>(
        IRequest<TResponse> request,
        CancellationToken cancellationToken = new()
    )
    {
        return await mediator.Send(request, cancellationToken);
    }

    public async ValueTask<TResponse> Send<TResponse>(
        ICommand<TResponse> command,
        CancellationToken cancellationToken = new()
    )
    {
        return await mediator.Send(command, cancellationToken);
    }

    public async ValueTask<TResponse> Send<TResponse>(Mediator.IQuery<TResponse> query,
        CancellationToken cancellationToken = new()
    )
    {
        return await mediator.Send(query, cancellationToken);
    }

    public async ValueTask<object?> Send(object message, CancellationToken cancellationToken = new())
    {
        return await mediator.Send(message, cancellationToken);
    }

    public IAsyncEnumerable<TResponse> CreateStream<TResponse>(
        IStreamQuery<TResponse> query,
        CancellationToken cancellationToken = new()
    )
    {
        return mediator.CreateStream(query, cancellationToken);
    }

    public IAsyncEnumerable<TResponse> CreateStream<TResponse>(
        IStreamRequest<TResponse> request,
        CancellationToken cancellationToken = new()
    )
    {
        return mediator.CreateStream(request, cancellationToken);
    }

    public IAsyncEnumerable<TResponse> CreateStream<TResponse>(
        IStreamCommand<TResponse> command,
        CancellationToken cancellationToken = new()
    )
    {
        return mediator.CreateStream(command, cancellationToken);
    }

    public IAsyncEnumerable<object?> CreateStream(
        object message,
        CancellationToken cancellationToken = new()
    )
    {
        return mediator.CreateStream(message, cancellationToken);
    }
}