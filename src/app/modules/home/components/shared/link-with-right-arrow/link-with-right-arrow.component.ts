import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-with-right-arrow',
  templateUrl: './link-with-right-arrow.component.html',
  styleUrl: './link-with-right-arrow.component.css',
})
export class LinkWithRightArrowComponent {
  @Input() link: string = '';
  @Input() linkText: string = '';
}
