import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { BathroomDropdownComponent } from './bathroom-dropdown/bathroom-dropdown.component';



@NgModule({
  declarations: [BathroomDropdownComponent],
  imports: [
    CommonModule,
    DropdownModule
  ]
})
export class BathroomDropdownModule { }
