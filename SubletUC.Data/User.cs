using NodaTime;
using SubletUC.Data.Enum;
namespace SubletUC.Data;
public class User
{ 
    public int UserId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public Instant CreatedAt { get; set; }
    public Role Role { get; set; }
    public bool IsActive { get; set; }
}