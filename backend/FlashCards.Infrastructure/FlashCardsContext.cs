using FlashCards.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace FlashCards.Infrastructure;

public class FlashCardsContext(DbContextOptions<FlashCardsContext> options) : DbContext(options)
{
    public required DbSet<UserDto> Users { get; set; }
}