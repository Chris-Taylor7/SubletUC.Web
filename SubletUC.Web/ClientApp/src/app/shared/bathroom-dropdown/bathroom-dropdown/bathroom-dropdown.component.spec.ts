import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomDropdownComponent } from './bathroom-dropdown.component';

describe('BathroomDropdownComponent', () => {
  let component: BathroomDropdownComponent;
  let fixture: ComponentFixture<BathroomDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathroomDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
