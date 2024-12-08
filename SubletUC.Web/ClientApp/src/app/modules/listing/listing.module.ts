import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { ViewListingsComponent } from '../view-listings/view-listings/view-listings.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [ListingComponent]
})
export class ListingModule { }
