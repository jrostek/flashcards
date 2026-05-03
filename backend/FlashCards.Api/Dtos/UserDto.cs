namespace FlashCards.Api.Dtos;

public record UserDto
{
    public required string Email { get; init; }
    public required string Name { get; init; }
}
