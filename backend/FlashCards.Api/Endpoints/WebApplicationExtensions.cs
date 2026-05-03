namespace FlashCards.Api.Endpoints;

public static class WebApplicationExtensions
{
    public static WebApplication MapEndpoints(this WebApplication webApplication)
    {
        var endpoints = webApplication.Services
            .GetRequiredService<IEnumerable<IEndpoint>>();

        foreach (var endpoint in endpoints)
        {
            endpoint.MapEndpoint(webApplication);
        }

        return webApplication;
    }
}
