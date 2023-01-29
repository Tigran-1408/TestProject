using System.Text.Json.Serialization;

namespace Microsoft.Extensions.DependencyInjection.Common.Country.Common;

public class CountryDTO
{
    public CountryDTO() { }

    public int Id { get; set; }
    public string Name { get; set; }
    [JsonPropertyName("iso2")] 
    public string ISO2 { get; set; }
    [JsonPropertyName("iso3")] 
    public string ISO3 { get; set; }
    public int TotalCities { get; set; }
}