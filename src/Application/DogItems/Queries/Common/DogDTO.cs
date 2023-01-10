namespace Microsoft.Extensions.DependencyInjection.DogItems.Queries;

public class DogDto
{
    public Guid Id { set; get; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
}