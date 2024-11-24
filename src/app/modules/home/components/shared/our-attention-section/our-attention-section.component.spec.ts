import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAttentionSectionComponent } from './our-attention-section.component';

describe('OurAttentionSectionComponent', () => {
  let component: OurAttentionSectionComponent;
  let fixture: ComponentFixture<OurAttentionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurAttentionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAttentionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
