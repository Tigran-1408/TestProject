using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using System.Net;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Common.Humans.Commands.Upsert;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection.Common.Humans.Queries.Common;
using Microsoft.Extensions.DependencyInjection.Common.Humans.Queries.GetAll;


namespace CleanArchitecture.WebUI.Controllers;
public class HumanController: ApiControllerBase
{
    [HttpPost("create")]
    [SwaggerResponse(HttpStatusCode.OK, typeof(Result))]
    [SwaggerResponse(HttpStatusCode.BadRequest, typeof(ValidationProblemDetails))]
    public async Task<Result> Create([FromQuery] UpsertHuman command)
    {
        return await Mediator.Send(command);
    }

    [HttpGet]
    public async Task<IEnumerable<HumanDTO>> GetAll()
    {
        return await Mediator.Send(new GetHuman());
    }
    
}