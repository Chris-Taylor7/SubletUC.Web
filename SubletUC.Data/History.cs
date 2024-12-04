using NodaTime;
using SubletUC.Data.Classes;

namespace SubletUC.Data.Classes;
public class History
{
     public bool Deleted {get; set;}
    public Instant CreatedAt {get; set;}
    public int? CreatorId {get; set;}
    public User? Creator {get; set;}
    public Instant? DeletedAt {get; set;}
    public int? DeletedById {get; set;}
    public User? DeletedBy {get; set;}
}