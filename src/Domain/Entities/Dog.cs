using System.ComponentModel.DataAnnotations;

namespace CleanArchitecture.Domain.Entities;

public class Dog
{
    public Guid Id { set; get; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
}