using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Domain.Entities;
using MediatR;

namespace Microsoft.Extensions.DependencyInjection.DogItems.Commands.CreatDog;

public record CreateDogCommand : IRequest<Result>
{
    public Guid Id { set; get; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
}

public class CreateDogCommandHandler : IRequestHandler<CreateDogCommand, Result>
{
    private readonly IApplicationDbContext _context;

    public CreateDogCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Result> Handle(CreateDogCommand request, CancellationToken cancellationToken)
    {
        if (request.Id == Guid.Empty)
        {
            Dog entity = new Dog
            {
                Id = Guid.NewGuid(),
                Breed = request.Breed,
                Name = request.Name,
                Image = request.Image,
                Description = request.Description
            };
            _context.Dogs.Add(entity);
        }

        await _context.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}