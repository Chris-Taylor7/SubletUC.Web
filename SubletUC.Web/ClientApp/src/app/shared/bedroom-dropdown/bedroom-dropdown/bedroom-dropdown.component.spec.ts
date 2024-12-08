import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomDropdownComponent } from './bedroom-dropdown.component';

describe('BedroomDropdownComponent', () => {
  let component: BedroomDropdownComponent;
  let fixture: ComponentFixture<BedroomDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedroomDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
