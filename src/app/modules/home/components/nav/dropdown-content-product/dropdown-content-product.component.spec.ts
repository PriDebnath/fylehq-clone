import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownContentProductComponent } from './dropdown-content-product.component';

describe('DropdownContentProductComponent', () => {
  let component: DropdownContentProductComponent;
  let fixture: ComponentFixture<DropdownContentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownContentProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownContentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
