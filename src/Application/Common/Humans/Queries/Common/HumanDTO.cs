using CleanArchitecture.Domain.Enums;

namespace Microsoft.Extensions.DependencyInjection.Common.Humans.Queries.Common;

public class HumanDTO
{
    public Guid Id { set; get; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Middlename { get; set; }
    public string PassportNumber { get; set; }
    public string SocialCardNumber { get; set; }
    public DateTime BirthDate { get; set; }
    public Gender Gender { get; set; }
    
}