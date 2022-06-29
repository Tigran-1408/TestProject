using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using System.Net;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Common.Humans.Commands.Upsert;
using Microsoft.AspNetCore.Authorization;


namespace CleanArchitecture.WebUI.Controllers;
[Authorize]
public class HumanController: ApiControllerBase
{
    [HttpPost("create")]
    [SwaggerResponse(HttpStatusCode.OK, typeof(Result))]
    [SwaggerResponse(HttpStatusCode.BadRequest, typeof(ValidationProblemDetails))]
    public async Task<Result> Create([FromQuery] UpsertHuman command)
    {
        return await Mediator.Send(command);
    }
    
}