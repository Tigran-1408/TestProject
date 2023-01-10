using CleanArchitecture.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Microsoft.Extensions.DependencyInjection.DogItems.Queries.GetDog;

public record GetDogsCommand : IRequest<IEnumerable<DogDto>>{}

public class GetDogsCommandHandler : IRequestHandler<GetDogsCommand, IEnumerable<DogDto>>
{
    private readonly IApplicationDbContext _context;

    public GetDogsCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<DogDto>> Handle(GetDogsCommand request, CancellationToken cancellationToken)
    {
        return await _context.Dogs.AsNoTracking().OrderBy(x => x.Name).Select(x => new DogDto
        {
            Id = x.Id,
            Name = x.Name,
            Breed = x.Breed,
            Image = x.Image,
            Description = x.Description
        }).ToListAsync(cancellationToken);
    }
}