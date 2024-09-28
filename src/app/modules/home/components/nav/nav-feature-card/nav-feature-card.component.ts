import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-feature-card',
  templateUrl: './nav-feature-card.component.html',
  styleUrl: './nav-feature-card.component.css',
})
export class NavFeatureCardComponent {
  @Input() svg: string = '';
  @Input() headline: string = '';
  @Input() subline: string = '';
  @Input() redirectTo: string = '';
}
