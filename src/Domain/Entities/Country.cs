using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CleanArchitecture.Domain.Entities;

public class Country
{
    public Country() { }

    [Key] [Required] public int Id { get; set; }

    public string Name { get; set; }

    [JsonPropertyName("iso2")] public string ISO2 { get; set; }

    [JsonPropertyName("iso3")] public string ISO3 { get; set; }
    [JsonIgnore] public virtual List<City> Cities { get; set; }

    private int _TotCities = 0;

    [NotMapped]
    public int TotCities
    {
        get
        {
            return (Cities != null) ? Cities.Count : _TotCities;
        }
        set
        {
            _TotCities = value;
        }
    }
}