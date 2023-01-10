using CleanArchitecture.Application.Common.Exceptions;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Microsoft.Extensions.DependencyInjection.DogItems.Commands.UpdateDog;

public record UpdateDogCommand : IRequest
{
    public Guid Id { set; get; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
}

public class UpdateDogCommandHandler : IRequestHandler<UpdateDogCommand>
{
    private readonly IApplicationDbContext _context;

    public UpdateDogCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(UpdateDogCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Dogs.FirstOrDefaultAsync(d => d.Id == request.Id, cancellationToken);

        if (entity == null)
        {
            throw new NotFoundException(nameof(Dog), request.Id);
        }

        entity.Name = request.Name;
        entity.Breed = request.Breed;
        entity.Image = request.Image;
        entity.Description = request.Description;

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}