using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using SubletUC.Data;
using SubletUC.Services;

namespace SubletUC.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListingController : ControllerBase
    {
        private readonly ListingService? _listingService;
        private readonly SubletUCContext? _context;

         public ListingController(ListingService listingService, SubletUCContext context)
        {
            _listingService = listingService;
            _context = context;
        }
          [HttpPost("CreateListing")]
        public ServiceResponse CreateOrUpdateListing([FromBody] Listing listing)
        {
            return _listingService.CreateOrUpdateListing(listing);
        }

        [HttpGet("GetAllListings")]
        public IEnumerable<Listing> GetAllListings()
        {
            return _listingService.GetAllListings();
        }

        [HttpGet("GetListing")]
        public Listing GetListingById(int id)
        {
            return _listingService.GetListingById(id); 
        }
        [HttpGet("DeleteListing")]
        public ServiceResponse DeleteListing(int id)
        {
            return _listingService.DeleteListing(id);
        }
    }
}