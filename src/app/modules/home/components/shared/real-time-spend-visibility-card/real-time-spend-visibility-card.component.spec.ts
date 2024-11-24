import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeSpendVisibilityCardComponent } from './real-time-spend-visibility-card.component';

describe('RealTimeSpendVisibilityCardComponent', () => {
  let component: RealTimeSpendVisibilityCardComponent;
  let fixture: ComponentFixture<RealTimeSpendVisibilityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealTimeSpendVisibilityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeSpendVisibilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
