import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankGradeSecuritySectionComponent } from './bank-grade-security-section.component';

describe('BankGradeSecuritySectionComponent', () => {
  let component: BankGradeSecuritySectionComponent;
  let fixture: ComponentFixture<BankGradeSecuritySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankGradeSecuritySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankGradeSecuritySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
