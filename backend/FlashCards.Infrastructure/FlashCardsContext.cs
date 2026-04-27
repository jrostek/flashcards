using FlashCards.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace FlashCards.Infrastructure;

public class FlashCardsContext(DbContextOptions<FlashCardsContext> options) : DbContext(options)
{
    public required DbSet<User> Users { get; set; }
    public required DbSet<FlashCard> FlashCards { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(FlashCardsContext).Assembly);
    }
}
