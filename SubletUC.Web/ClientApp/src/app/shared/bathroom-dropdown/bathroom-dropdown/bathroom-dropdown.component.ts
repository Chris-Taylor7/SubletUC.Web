import { Component } from '@angular/core';

@Component({
  selector: 'app-bathroom-dropdown',
  templateUrl: './bathroom-dropdown.component.html',
  styleUrl: './bathroom-dropdown.component.css'
})
export class BathroomDropdownComponent {
  bathrooms = [
    {inputId: 1, title: '1'},
    {inputId: 2, title: '2'},
    {inputId: 3, title: '3'},
    {inputId: 4, title: '4'},
    {inputId: 5, title: '5+'}
  ]
}
