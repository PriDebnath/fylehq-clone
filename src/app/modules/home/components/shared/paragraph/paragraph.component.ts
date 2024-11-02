import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css',
})
export class ParagraphComponent {
  @Input() paragraphHeader: string = '';
  @Input() paragraphBody: string = '';
}
