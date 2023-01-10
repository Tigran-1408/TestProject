using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Application.TodoItems.Commands.DeleteTodoItem;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection.DogItems.Commands.CreatDog;
using Microsoft.Extensions.DependencyInjection.DogItems.Commands.UpdateDog;
using Microsoft.Extensions.DependencyInjection.DogItems.Queries;
using Microsoft.Extensions.DependencyInjection.DogItems.Queries.GetDog;

namespace CleanArchitecture.WebUI.Controllers;

public class DogController : ApiControllerBase
{
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

    [HttpPut("{id}")]
    public async Task<ActionResult> Update(Guid Id, UpdateDogCommand command)
    {
        if (Id != command.Id)
        {
            return BadRequest();
        }

        await Mediator.Send(command);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await Mediator.Send(new DeleteTodoItemCommand(id));
        return NoContent();
    }
}