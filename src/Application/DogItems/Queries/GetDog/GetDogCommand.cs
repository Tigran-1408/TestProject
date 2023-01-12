using CleanArchitecture.Application.Common.Exceptions;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Microsoft.Extensions.DependencyInjection.DogItems.Queries.GetDog;

public record GetDogCommand(Guid Id) : IRequest<DogDto>{}

public class GetDogCommandHandler : IRequestHandler<GetDogCommand, DogDto>
{
    private readonly IApplicationDbContext _context;

    public GetDogCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<DogDto> Handle(GetDogCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Dogs.AsNoTracking().FirstOrDefaultAsync(d => d.Id == request.Id);
        if (entity == null)
        {
            throw new NotFoundException(nameof(Dog), request.Id);
        }
        DogDto dog = new DogDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Breed = entity.Breed,
            Image = entity.Image,
            Description = entity.Description
        };
        return dog;
    }
}