using FlashCards.Shared.Enums;

namespace FlashCards.Api.Dtos;

public record FlashCardDto
{
    public required string Name { get; init; }
    public Language Language1 { get; init; }
    public required string Language1Text { get; init; }
    public Language Language2 { get; init; }
    public required string Language2Text { get; init; }
}
