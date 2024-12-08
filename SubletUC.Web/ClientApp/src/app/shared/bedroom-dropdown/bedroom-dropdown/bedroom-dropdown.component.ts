import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bedroom-dropdown',
  templateUrl: './bedroom-dropdown.component.html',
  styleUrl: './bedroom-dropdown.component.css'
})
export class BedroomDropdownComponent {
  bedrooms = [
    {inputId: 1, title: '1 bedroom'},
    {inputId: 2, title: '2 bedroom'},
    {inputId: 3, title: '3 bedroom'},
    {inputId: 4, title: '4 bedroom'},
    {inputId: 5, title: '5+ bedroom'},
  ]
}
