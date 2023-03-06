import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuotesTableComponent } from './my-quotes-table.component';

describe('MyQuotesTableComponent', () => {
  let component: MyQuotesTableComponent;
  let fixture: ComponentFixture<MyQuotesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQuotesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQuotesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
