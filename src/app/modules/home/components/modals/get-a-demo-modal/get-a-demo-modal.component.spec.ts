import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetADemoModalComponent } from './get-a-demo-modal.component';

describe('GetADemoModalComponent', () => {
  let component: GetADemoModalComponent;
  let fixture: ComponentFixture<GetADemoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetADemoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetADemoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
