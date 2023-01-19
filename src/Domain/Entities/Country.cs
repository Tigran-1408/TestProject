using System.ComponentModel.DataAnnotations;

namespace CleanArchitecture.Domain.Entities;

public class Country
{
    public Country(){}
    
    [Key]
    [Required]
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public string ISO2 { get; set; }
    
    public string ISO3 { get; set; }
    
    public virtual List<City> Cities { get; set; }
}