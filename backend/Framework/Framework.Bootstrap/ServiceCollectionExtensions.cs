using System.Reflection;

using Framework.Core.CQRS;

using Mediator;

using Microsoft.Extensions.DependencyInjection;

namespace Framework.Bootstrap;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddFramework(this IServiceCollection services, params Type[] assemblyMarkerTypes)
    {
        Assembly[] assemblies = assemblyMarkerTypes.Select(t => t.Assembly).ToArray();

        return services
                .AddScoped<IQueryBroker, Broker>()
                .AddMediator(options =>
                {
                    options.Namespace = "Framework.Core";
                    options.ServiceLifetime = ServiceLifetime.Singleton;
                    options.GenerateTypesAsInternal = true;
                    options.NotificationPublisherType = typeof(ForeachAwaitPublisher);
                    options.Assemblies = [];
                    options.PipelineBehaviors = [];
                    options.StreamPipelineBehaviors = [];
                })
            ;
    }
}