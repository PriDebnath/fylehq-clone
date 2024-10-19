import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownContentSolutionsComponent } from './dropdown-content-solutions.component';

describe('DropdownContentSolutionsComponent', () => {
  let component: DropdownContentSolutionsComponent;
  let fixture: ComponentFixture<DropdownContentSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownContentSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownContentSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
