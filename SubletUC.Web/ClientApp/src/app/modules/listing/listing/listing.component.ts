import { Component, Input } from '@angular/core';
import { Listing } from 'src/app/data/listing';

@Component({
  selector: 'app-listing',
  //standalone: true,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  @Input() listing: Listing | undefined; // Use the listing input directly
  @Input()
  @Input() displayDialog: boolean = true;

  closeDialog() {
    this.displayDialog = false; // Hide the dialog
    this.listing = undefined; // Reset selected listing
  }
}
