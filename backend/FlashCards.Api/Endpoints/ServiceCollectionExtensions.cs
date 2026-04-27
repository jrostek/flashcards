using Microsoft.Extensions.DependencyInjection.Extensions;

namespace FlashCards.Api.Endpoints;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddEndpoints(this IServiceCollection services)
    {
        var serviceDescriptors = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(a => a.DefinedTypes)
            .Where(type => type is { IsAbstract: false, IsInterface: false })
            .Where(type => type.IsAssignableTo(typeof(IEndpoint)))
            .Select(type => ServiceDescriptor.Transient(typeof(IEndpoint), type))
            .ToArray();

        services.TryAddEnumerable(serviceDescriptors);

        return services;
    }
}
