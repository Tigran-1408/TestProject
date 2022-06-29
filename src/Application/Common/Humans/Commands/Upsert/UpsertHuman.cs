using CleanArchitecture.Application.Common.Exceptions;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Domain.Enums;
using MediatR;

namespace CleanArchitecture.Common.Humans.Commands.Upsert
{
    public class UpsertHuman : IRequest<Result>
    {
        public Guid Id { set; get; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string MiddleName { get; set; }
        public string PassportNumber { get; set; }
        public string SocialCardNumber { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
    }

    public class UpsertHumanHandler : IRequestHandler<UpsertHuman, Result>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMediator _mediator;

        public UpsertHumanHandler(IApplicationDbContext context, IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<Result> Handle(UpsertHuman request, CancellationToken token)
        {


            Human human = new Human();
            if (request.Id == Guid.Empty)
            {
                _context.Humans.Add(human);
            }
            else
            {
                human = _context.Humans.FirstOrDefault(x => x.Id == request.Id);
                if (human == null)
                    throw new NotFoundException(nameof(Human));
            }
            
            human.Firstname = request.Firstname;
            human.Lastname = request.Lastname;
            human.Middlename = request.MiddleName;
            human.PassportNumber = request.PassportNumber;
            human.BirthDate = Convert.ToDateTime(request.BirthDate);
            human.Gender = request.Gender;
            human.SocialCardNumber = request.SocialCardNumber;

            await _mediator.Send(human, token);

            await _context.SaveChangesAsync(token);
            return Result.Success();
        }
    }
}