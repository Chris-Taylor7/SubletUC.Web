import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListingService } from 'src/app/services/listing-service';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css'],
})
export class CreateListingComponent implements OnInit {
  houseListingForm!: FormGroup;
  bedroomsOptions = [
    { label: '1 Bedroom', value: 1 },
    { label: '2 Bedrooms', value: 2 },
    { label: '3 Bedrooms', value: 3 },
    { label: '4 Bedrooms', value: 4 },
    { label: '5+ Bedrooms', value: 5 },
  ];
  bathroomsOptions = [
    { label: '1 Bathroom', value: 1 },
    { label: '2 Bathrooms', value: 2 },
    { label: '3 Bathrooms', value: 3 },
    { label: '4 Bathrooms', value: 4 },
    { label: '5+ Bathrooms', value: 5 },
  ];
  loading = false;

  constructor(private fb: FormBuilder, private _listingService: ListingService) {}

  ngOnInit(): void {
    this.houseListingForm = this.fb.group({
      address: ['', Validators.required],
      rent: ['', [Validators.required, Validators.min(1)]],
      bedrooms: [null, Validators.required],
      bathrooms: [null, Validators.required],
      utilitiesIncludedInRent: [false],
      sharedRoom: [false],
      sharedRoommates: ['', [Validators.required, Validators.min(0)]],
      catsAndDogsAllowed: [false],
      washerDryer: [false],
      notes: [''],
    });

    // Conditionally require sharedRoommates if sharedRoom is true
    this.houseListingForm.get('sharedRoom')?.valueChanges.subscribe((sharedRoom) => {
      const roommatesControl = this.houseListingForm.get('sharedRoommates');
      if (sharedRoom) {
        roommatesControl?.setValidators([Validators.required, Validators.min(1)]);
      } else {
        roommatesControl?.clearValidators();
      }
      roommatesControl?.updateValueAndValidity();
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.houseListingForm.get(field);
    return (control?.touched && control?.invalid) ?? false;
  }

  onSubmit(): void {
    if (this.houseListingForm.invalid) {
      this.houseListingForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formData = this.houseListingForm.value;

    this._listingService.createListing(formData).subscribe();
  }
}
