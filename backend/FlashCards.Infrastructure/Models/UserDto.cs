using System.ComponentModel.DataAnnotations;

namespace FlashCards.Infrastructure.Models;

public record UserDto
{
    [Key] public Guid Id { get; init; }
    [MaxLength(200)] public string Name { get; init; } = null!;
    [MaxLength(200)] public string Email { get; init; } = null!;
}