import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css',
})
export class FeatureSectionComponent {
  @Input() link: string = '';
  @Input() linkText: string = '';
}
