import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline-and-subline',
  templateUrl: './headline-and-subline.component.html',
  styleUrl: './headline-and-subline.component.css',
})
export class HeadlineAndSublineComponent {
  @Input() containerClass?: { [key: string]: boolean };
  @Input() containerStyle?: { [key: string]: string };
  @Input() headline: string = 'headline';
  @Input() subline: string = 'subline';
  @Input() link: string = '';
  @Input() linkText: string = '';
}
