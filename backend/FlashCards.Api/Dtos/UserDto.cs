namespace FlashCards.Api.Dtos;

public record UserDto
{
    public string Email { get; init; } = null!;
    public string Name { get; init; } = null!;
}
