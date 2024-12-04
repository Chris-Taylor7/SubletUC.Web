namespace SubletUC.Data.Classes;
using SubletUC.Data.Enum;
public class Roommate
{   
    public int RoommateId { get; set; }
    public int Year { get; set; }
    public Gender Gender { get; set; }
    public int ListingId { get; set; }
    public Listing? Listing { get; set; }
}
