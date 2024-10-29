import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlogCardComponent } from './nav-blog-card.component';

describe('NavBlogCardComponent', () => {
  let component: NavBlogCardComponent;
  let fixture: ComponentFixture<NavBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBlogCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
