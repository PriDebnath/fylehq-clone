import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineAndSublineComponent } from './headline-and-subline.component';

describe('HeadlineAndSublineComponent', () => {
  let component: HeadlineAndSublineComponent;
  let fixture: ComponentFixture<HeadlineAndSublineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadlineAndSublineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlineAndSublineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
