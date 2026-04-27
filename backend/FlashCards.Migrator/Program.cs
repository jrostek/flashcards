using FlashCards.Infrastructure;
using FlashCards.Migrator;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = Host.CreateApplicationBuilder(args);

builder.Services.AddHostedService<Migrator>();
builder.Services.AddDbContextPool<FlashCardsContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("postgres-db"),
        o => o.MigrationsAssembly("FlashCards.Migrator")
    )
);

var host = builder.Build();
await host.StartAsync();
