using FlashCards.Shared.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FlashCards.Infrastructure.Models;

public record FlashCard
{
    public Guid Id { get; init; }
    public required string Name { get; init; }
    public Language Language1 { get; init; }
    public required string Language1Text { get; init; }
    public Language Language2 { get; init; }
    public required string Language2Text { get; init; }
}

public class FlashCardConfiguration : IEntityTypeConfiguration<FlashCard>
{
    public void Configure(EntityTypeBuilder<FlashCard> builder)
    {
        builder.HasKey(f => f.Id);

        builder.Property(f => f.Name)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(f => f.Language1)
            .HasConversion<string>()
            .HasMaxLength(50);

        builder.Property(f => f.Language1Text)
            .IsRequired()
            .HasMaxLength(1000);

        builder.Property(f => f.Language2)
            .HasConversion<string>()
            .HasMaxLength(50);

        builder.Property(f => f.Language2Text)
            .IsRequired()
            .HasMaxLength(1000);
    }
}
