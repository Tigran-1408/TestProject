﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CleanArchitecture.Domain.Entities;

public class City
{
    public City()
    {
    }

    [Key]
    [Required] 
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public string Name_ASCII { get; set; }
    
    [Column(TypeName = "decimal(7, 4)")]
    public decimal Lat { get; set; }
    
    [Column(TypeName = "decimal(7, 4)")]
    public decimal Lon { get; set; }
    
    [ForeignKey("Country")]
    public int CountryId { get; set; }
    
    public virtual Country Country { get; set; }
}