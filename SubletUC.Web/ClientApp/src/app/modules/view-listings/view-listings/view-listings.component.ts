import { Component } from '@angular/core';
import { Listing } from 'src/app/data/listing';
import { Gender } from 'src/app/data/roommate';
import { ListingService } from 'src/app/services/listing-service';
import { ListingComponent } from "../../listing/listing/listing.component";
@Component({
  selector: 'app-view-listings',
  templateUrl: './view-listings.component.html',
  styleUrl: './view-listings.component.css'
})
export class ViewListingsComponent {
  constructor(private listingService: ListingService) {}

  displayDialog: boolean = false; // To control dialog visibility
  selectedListing: Listing | undefined; // Holds the selected listing object
  paginatedListings: Listing[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 9;

  listings: Listing[] = [
    {
      listingId: 1,
      address: '4567 W. McMillan St.',
      rent: 550,
      availability: 'Available Now',
      bedrooms: 3,
      bathrooms: 2,
      description: 'Spacious house with great amenities.',
      utilitiesIncludedInRent: true,
      averageutilities: 50,
      roommates: [{ year: 2026, Gender: Gender.Male}, { year: 2025, Gender: Gender.Female }, { year: 2024, Gender: Gender.NonBinary}],
      sharedRoom: false,
      sharedRoommates: 0,
      catsAndDogsAllowed: true,
      washerDryer: true,
      offStreetParking: true,
      driveway: true,
      distanceFromCampus: 0.5,
      notes: '',
      photo: undefined,
      deleted: false
    },{
      listingId: 1,
      address: '4567 W. McMillan St.',
      rent: 550,
      availability: 'Available Now',
      bedrooms: 3,
      bathrooms: 2,
      description: 'Spacious house with great amenities.',
      utilitiesIncludedInRent: true,
      averageutilities: 50,
      roommates: [{ year: 2026, Gender: Gender.Male}, { year: 2025, Gender: Gender.Female }, { year: 2024, Gender: Gender.NonBinary}],
      sharedRoom: false,
      sharedRoommates: 0,
      catsAndDogsAllowed: true,
      washerDryer: true,
      offStreetParking: true,
      driveway: true,
      distanceFromCampus: 0.5,
      notes: '',
      photo: undefined,
      deleted: false
    },{
      listingId: 1,
      address: '4567 W. McMillan St.',
      rent: 550,
      availability: 'Available Now',
      bedrooms: 3,
      bathrooms: 2,
      description: 'Spacious house with great amenities.',
      utilitiesIncludedInRent: true,
      averageutilities: 50,
      roommates: [{ year: 2026, Gender: Gender.Male}, { year: 2025, Gender: Gender.Female }, { year: 2024, Gender: Gender.NonBinary}],
      sharedRoom: false,
      sharedRoommates: 0,
      catsAndDogsAllowed: true,
      washerDryer: true,
      offStreetParking: true,
      driveway: true,
      distanceFromCampus: 0.5,
      notes: '',
      photo: undefined,
      deleted: false
    },
  ];


  ngOnInit(): void {
    this.loadListings();
    this.updatePaginatedListings();
  }

  loadListings() {
    this.listingService.getAllListings().subscribe(data => {
      this.listings = data;
      this.updatePaginatedListings();
    });
  }

  updatePaginatedListings() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedListings = this.listings.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePaginatedListings();
  }

  // This method will be called when the user clicks "View Listing"
  viewListing(listingId: number) {
    // Find the listing by its ID
    this.listingService.getListingById(listingId).subscribe(data => this.selectedListing = data)
    this.displayDialog = true; // Show the dialog
  }

  closeDialog() {
    this.displayDialog = false; // Hide the dialog
    this.selectedListing = undefined; // Reset selected listing
  }

  get totalPages() {
    return Math.ceil(this.listings.length / this.itemsPerPage);
  }
}
