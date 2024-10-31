import {
  AfterContentChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-input-brand',
  templateUrl: './input-brand.component.html',
  styleUrl: './input-brand.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class InputBrandComponent implements AfterContentChecked {
  @Input() invalid: boolean = false;
  @Input() invalidText: string = '';
  @Input() inputValue: string = '';
  @Input() labelText: string = '';
  @Output() inputOutput: EventEmitter<any> = new EventEmitter<any>();

  ngAfterContentChecked(): void {}

  handleInput(event: Event) {
    this.inputOutput.emit(this.inputValue);
  }
}
