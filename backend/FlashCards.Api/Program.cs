using FlashCards.Api.Aspire;
using FlashCards.Api.Endpoints;
using FlashCards.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// EF configuration
builder.Services.AddDbContextPool<FlashCardsContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("postgres-db"),
        o => o.MigrationsAssembly("FlashCards.Migrator")
    )
);
builder.Services.AddHealthChecks()
    .AddDbContextCheck<FlashCardsContext>();

builder.Services.AddEndpoints();
builder.Services.AddAspireOpenTelemetry();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.MapEndpoints();

app.Run();
