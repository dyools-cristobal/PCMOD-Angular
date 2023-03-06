import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalsListingComponent } from './renewals-listing.component';

describe('RenewalsListingComponent', () => {
  let component: RenewalsListingComponent;
  let fixture: ComponentFixture<RenewalsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewalsListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
