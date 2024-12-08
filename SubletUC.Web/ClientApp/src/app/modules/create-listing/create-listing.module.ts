import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox'
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { InputNumberModule } from 'primeng/inputnumber'
@NgModule({
  declarations: [CreateListingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    InputTextareaModule,
    InputNumberModule
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
