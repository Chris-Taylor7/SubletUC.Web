import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateListingComponent } from './create-listing/create-listing.component';



@NgModule({
  declarations: [CreateListingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
