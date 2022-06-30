using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Common.Humans.Queries.Common;

namespace Microsoft.Extensions.DependencyInjection.Common.Humans.Queries.GetAll;

public class GetHuman:IRequest<IEnumerable<HumanDTO>>
{
    public class Handler:IRequestHandler<GetHuman,IEnumerable<HumanDTO>>
    {
        private readonly IApplicationDbContext _context;

        public Handler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HumanDTO>> Handle(GetHuman request, CancellationToken token)
        {
            return await _context.Humans.AsNoTracking().OrderBy(x => x.Firstname).Select(x => new HumanDTO
            {
                Id = x.Id,
                Firstname = x.Firstname,
                Lastname = x.Lastname,
                Middlename = x.Middlename,
                SocialCardNumber = x.SocialCardNumber,
                PassportNumber = x.PassportNumber,
                BirthDate = x.BirthDate,
                Gender = x.Gender,
            }).ToListAsync(token);
        }
    }
}