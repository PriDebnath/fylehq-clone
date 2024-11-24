import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-real-time-spend-visibility-card',
  templateUrl: './real-time-spend-visibility-card.component.html',
  styleUrl: './real-time-spend-visibility-card.component.css',
})
export class RealTimeSpendVisibilityCardComponent {
  @Input() isMobile: boolean = false;
  @Input() imgSrc: string = '';
  @Input() headline: string = '';
  @Input() list: string[] = [];
}
