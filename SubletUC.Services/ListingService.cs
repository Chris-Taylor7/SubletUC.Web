using SubletUC.Data;

namespace SubletUC.Services;
    public class ListingService 
    {
        private readonly SubletUCContext _context;

        public ListingService(SubletUCContext context)
        {
            _context = context;
        }

        public ServiceResponse CreateOrUpdateListing(Listing listing)
        {
            var response = new ServiceResponse();

            if (listing.ListingId == 0)
            {
                // Create new listing
                _context.Listings.Add(listing);
                response.Success = true;
                response.Message = "Listing created successfully.";
            }
            else
            {
                // Update existing listing
                var currentListing = _context.Listings
                    .FirstOrDefault(x => x.ListingId == listing.ListingId);

                if (currentListing != null)
                {
                    currentListing.Address = listing.Address;
                    currentListing.Rent = listing.Rent;
                    currentListing.Availability = listing.Availability;
                    currentListing.Bedrooms = listing.Bedrooms;
                    currentListing.Bathrooms = listing.Bathrooms;
                    currentListing.Description = listing.Description;
                    currentListing.UtilitiesIncludedInRent = listing.UtilitiesIncludedInRent;
                    currentListing.AverageUtilities = listing.AverageUtilities;
                    currentListing.SharedRoom = listing.SharedRoom;
                    currentListing.SharedRoommates = listing.SharedRoommates;
                    currentListing.CatsAndDogsAllowed = listing.CatsAndDogsAllowed;
                    currentListing.WasherDryer = listing.WasherDryer;
                    currentListing.OffStreetParking = listing.OffStreetParking;
                    currentListing.Driveway = listing.Driveway;
                    currentListing.DistanceFromCampus = listing.DistanceFromCampus;
                    currentListing.Notes = listing.Notes;
                    currentListing.Photo = listing.Photo;
                    currentListing.Roommates = listing.Roommates;
                    currentListing.Deleted = listing.Deleted;

                    response.Success = true;
                    response.Message = "Listing updated successfully.";
                }
                else
                {
                    response.Success = false;
                    response.Message = "Listing not found.";
                }
            }

            _context.SaveChanges();
            return response;
        }

        public IEnumerable<Listing> GetAllListings()
        {
            return _context.Listings.Where(x => !x.Deleted).ToList();
        }

        public Listing GetListingById(int id)
        {
            return _context.Listings.FirstOrDefault(x => x.ListingId == id) ?? new Listing();
        }

        public ServiceResponse DeleteListing(int id)
        {
           
            var currentDeletedStatus = _context.Listings.Where(x => x.ListingId == id)
            .Select(x => x.Deleted)
            .FirstOrDefault();
            currentDeletedStatus = false;
            return new ServiceResponse();
        }
    }
