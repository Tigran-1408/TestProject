using CleanArchitecture.Application.Common.Exceptions;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Microsoft.Extensions.DependencyInjection.DogItems.Commands.DeleteDog;

public record DeleteDogCommand(Guid Id) : IRequest;

public class DeleteDogCommandHandler : IRequestHandler<DeleteDogCommand>
{
    private readonly IApplicationDbContext _context;

    public DeleteDogCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(DeleteDogCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Dogs.FirstOrDefaultAsync(d => d.Id == request.Id);
        if (entity == null)
        {
            throw new NotFoundException(nameof(Dog), request.Id);
        }

        _context.Dogs.Remove(entity);
        await _context.SaveChangesAsync(cancellationToken);
        return Unit.Value;
    }
}