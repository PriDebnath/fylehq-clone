import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  showInfo: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      this.showInfo = false;
    } else {
      this.showInfo = true;
    }
  }
}
