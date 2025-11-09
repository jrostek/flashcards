using Cards.Application;

using Framework.Core.CQRS;

using Microsoft.Extensions.DependencyInjection;

namespace Framework.Bootstrap;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddFramework(this IServiceCollection services)
    {
        services.AddMediator(options =>
        {
            options.ServiceLifetime = ServiceLifetime.Scoped;
            options.Assemblies = [typeof(CardsDomainTarget).Assembly];
        });

        return services
                .AddScoped<IQueryBroker, Broker>()
            ;
    }
}