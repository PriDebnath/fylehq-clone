import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFeatureCardComponent } from './nav-feature-card.component';

describe('NavFeatureCardComponent', () => {
  let component: NavFeatureCardComponent;
  let fixture: ComponentFixture<NavFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavFeatureCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
