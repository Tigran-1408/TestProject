using System.ComponentModel.DataAnnotations;

namespace CleanArchitecture.Domain.Entities;

public class Human
{
    [Key] public Guid Id { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Middlename { get; set; }
    public string PassportNumber { get; set; }
    public string SocialCardNumber { get; set; }
    public DateTime BirthDate { get; set; }
    public Gender Gender { get; set; }
}