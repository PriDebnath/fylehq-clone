import { Component, Input } from '@angular/core';
import { BlogNav } from '../../../models/nav.model';

@Component({
  selector: 'app-nav-blog-card',
  templateUrl: './nav-blog-card.component.html',
  styleUrl: './nav-blog-card.component.css',
})
export class NavBlogCardComponent {
  @Input() lastItem: boolean = false
  @Input() item: BlogNav= {};
}
