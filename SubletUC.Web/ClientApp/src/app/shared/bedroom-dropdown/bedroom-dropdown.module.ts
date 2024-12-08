import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { BedroomDropdownComponent } from './bedroom-dropdown/bedroom-dropdown.component';



@NgModule({
  declarations: [BedroomDropdownComponent],
  imports: [
    CommonModule,
    DropdownModule
  ]
})
export class BedroomDropdownModule { }
