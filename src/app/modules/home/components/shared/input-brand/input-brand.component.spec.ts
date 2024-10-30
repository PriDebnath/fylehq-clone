import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBrandComponent } from './input-brand.component';

describe('InputBrandComponent', () => {
  let component: InputBrandComponent;
  let fixture: ComponentFixture<InputBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
