import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSectionComponent } from './customer-section.component';

describe('CustomerSectionComponent', () => {
  let component: CustomerSectionComponent;
  let fixture: ComponentFixture<CustomerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
