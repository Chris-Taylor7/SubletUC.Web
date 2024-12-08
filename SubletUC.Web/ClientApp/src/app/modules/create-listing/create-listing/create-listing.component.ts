import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListingService } from 'src/app/services/listing-service';
@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css'],
  animations: [
    trigger('overlayContentAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CreateListingComponent {
  houseListingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly _listingService: ListingService
  )
  {
    this.houseListingForm = this.fb.group({
      address: [null, Validators.required],
      rent: [0, [Validators.required, Validators.min(0)]],
      bedrooms: [null, Validators.required],
      bathrooms: [null, Validators.required],
      utilitiesIncludedInRent: [false, Validators.required],
      sharedRoom: [false, Validators.required],
      sharedRoommates: [0, Validators.required],
      catsAndDogsAllowed: [false, Validators.required],
      washerDryer: [false, Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.houseListingForm.valid) {
      const formData = this.houseListingForm.value;
      debugger
      this._listingService.createListing(formData).subscribe();
      // Further logic for submitting the form can be added here
    } else {
      console.log('Form is invalid');
    }
  }
}
