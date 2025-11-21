using FlashCards.Api.Endpoints;

using Framework.Bootstrap;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddFramework();

WebApplication app = builder.Build();

app.UseHttpsRedirection();
app.UsePathBase("/api");
app.UseRouting();

CardsEndpoints.Configure(app);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();