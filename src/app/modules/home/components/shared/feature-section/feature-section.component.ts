import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
})
export class FeatureSectionComponent {
  @Input() link: string = '';
  @Input() imgSrc: string = '';
  @Input() subline: string = '';
  @Input() linkText: string = '';
  @Input() headline: string = '';
  @Input() containerClass: string = '';
}
