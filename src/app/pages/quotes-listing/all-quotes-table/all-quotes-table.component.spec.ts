import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuotesTableComponent } from './all-quotes-table.component';

describe('AllQuotesTableComponent', () => {
  let component: AllQuotesTableComponent;
  let fixture: ComponentFixture<AllQuotesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuotesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllQuotesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
