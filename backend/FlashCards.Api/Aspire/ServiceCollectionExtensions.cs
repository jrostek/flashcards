using OpenTelemetry.Logs;
using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

namespace FlashCards.Api.Aspire;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddAspireOpenTelemetry(this IServiceCollection services)
    {
        ArgumentNullException.ThrowIfNull(services);

        // Read application info for resource attributes
        const string serviceName = "flashcards-backend";

        // Configure OpenTelemetry logging options
        services.Configure<OpenTelemetryLoggerOptions>(options =>
            {
                options.IncludeFormattedMessage = true;
                options.IncludeScopes = true;
                options.ParseStateValues = true;
            }
        );

        services.AddOpenTelemetry()
            .ConfigureResource(resource => resource
                .AddService(serviceName)
            )
            .WithTracing(tracing => tracing
                // HTTP client instrumentation
                .AddHttpClientInstrumentation()
                // OTLP exporter (reads OTEL_EXPORTER_OTLP_ENDPOINT from environment)
                .AddOtlpExporter()
            )
            .WithMetrics(metrics => metrics
                // HTTP client metrics
                .AddHttpClientInstrumentation()
                // OTLP exporter
                .AddOtlpExporter()
            )
            .WithLogging(logging =>
                {
                    // OTLP exporter for logs
                    logging.AddOtlpExporter();
                }
            );

        return services;
    }
}
