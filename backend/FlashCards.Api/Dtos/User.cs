using System.ComponentModel.DataAnnotations;

namespace FlashCards.Api.Dtos;

public record User
{
    [MaxLength(200)] public string Email { get; init; } = null!;
    [MaxLength(200)] public string Name { get; init; } = null!;
}