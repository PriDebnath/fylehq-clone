import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWithRightArrowComponent } from './link-with-right-arrow.component';

describe('LinkWithRightArrowComponent', () => {
  let component: LinkWithRightArrowComponent;
  let fixture: ComponentFixture<LinkWithRightArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkWithRightArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkWithRightArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
