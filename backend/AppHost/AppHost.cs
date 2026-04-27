using Projects;

var builder = DistributedApplication.CreateBuilder(args);

var dbUserName = builder.AddParameter(
    "dbUserName",
    "postgres",
    false,
    true
);
var dbPassword = builder.AddParameter(
    "dbPassword",
    new GenerateParameterDefault(),
    true,
    true
);

var postgres = builder.AddPostgres("postgres-server", dbUserName, dbPassword)
    .WithDataVolume(isReadOnly: false);

var postgresDb = postgres.AddDatabase("postgres-db");

var migrator = builder.AddProject<FlashCards_Migrator>("migrator")
        .WithReference(postgresDb)
        .WaitFor(postgresDb)
    ;

var api = builder.AddProject<FlashCards_Api>("api")
        .WithReference(postgresDb)
        .WithHttpHealthCheck("/health")
        .WaitFor(postgresDb)
        .WaitForCompletion(migrator)
    ;

builder.Build().Run();
