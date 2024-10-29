import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownContentResourcesComponent } from './dropdown-content-resources.component';

describe('DropdownContentResourcesComponent', () => {
  let component: DropdownContentResourcesComponent;
  let fixture: ComponentFixture<DropdownContentResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownContentResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownContentResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
