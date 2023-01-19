using CleanArchitecture.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Infrastructure.Persistence;

public class WorldCitiesDbContext : DbContext
{
    public WorldCitiesDbContext() : base()
    {
    }

    public WorldCitiesDbContext(DbContextOptions<WorldCitiesDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<City>().ToTable("Cities");
        modelBuilder.Entity<Country>().ToTable("Countries");
    }
    
    public DbSet<City> Cities { get; set; }
    public DbSet<Country> Countries { get; set; }
}