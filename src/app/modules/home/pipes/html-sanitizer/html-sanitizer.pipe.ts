import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'htmlSanitizer',
})
export class HtmlSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(rawHtml: string): SafeHtml {
    let safeHtml: SafeHtml = this.domSanitizer.bypassSecurityTrustHtml(rawHtml);
    return safeHtml;
  }
}
