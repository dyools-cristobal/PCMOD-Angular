import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesListingComponent } from './policies-listing.component';

describe('PoliciesListingComponent', () => {
  let component: PoliciesListingComponent;
  let fixture: ComponentFixture<PoliciesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
