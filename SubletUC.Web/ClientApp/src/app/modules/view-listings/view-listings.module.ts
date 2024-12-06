import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ViewListingsComponent } from './view-listings/view-listings.component';
import { ListingModule } from '../listing/listing.module';


@NgModule({
  declarations: [ViewListingsComponent],
  imports: [
    CommonModule,
    DialogModule,
    ListingModule
  ],
  exports: [ViewListingsComponent]
})
export class ViewListingsModule { }
