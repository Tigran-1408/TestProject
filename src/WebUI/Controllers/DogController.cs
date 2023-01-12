using System.Net;
using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Application.TodoItems.Commands.DeleteTodoItem;
using CleanArchitecture.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection.DogItems.Commands.CreatDog;
using Microsoft.Extensions.DependencyInjection.DogItems.Commands.DeleteDog;
using Microsoft.Extensions.DependencyInjection.DogItems.Commands.UpdateDog;
using Microsoft.Extensions.DependencyInjection.DogItems.Queries;
using Microsoft.Extensions.DependencyInjection.DogItems.Queries.GetDog;
using NSwag.Annotations;

namespace CleanArchitecture.WebUI.Controllers;

public class DogController : ApiControllerBase
{
    [HttpGet("id")]
    public async Task<DogDto> GetById(Guid id)
    {
        return await Mediator.Send(new GetDogCommand(id));
    }
    
    [HttpGet]
    public async Task<IEnumerable<DogDto>> GetAll()
    {
        return await Mediator.Send(new GetDogsCommand());
    }

    [HttpPost]
    public async Task<Result> Create(CreateDogCommand command)
    {
        return await Mediator.Send(command);
    }

    [HttpPut]
    public async Task<ActionResult> Update(UpdateDogCommand command)
    {
        if (command.Id == Guid.Empty)
        {
            return BadRequest();
        }

        await Mediator.Send(command);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await Mediator.Send(new DeleteDogCommand(id));
        return NoContent();
    }
}