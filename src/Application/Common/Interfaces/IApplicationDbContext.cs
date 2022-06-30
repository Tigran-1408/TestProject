using CleanArchitecture.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }
    public DbSet<Human> Humans { get; set; }

    Task BeginTransactionAsync();
    Task CommitTransactionAsync();
    Task<int> SaveChangesAsync(CancellationToken token);
    
}
