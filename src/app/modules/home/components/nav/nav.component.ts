import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { svg } from './svg';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  svg = svg;
  showInfo: boolean = true;
  activeDropdownMenu: string = 'Resources';

  @Output() changeNavShowInfo = new EventEmitter();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      this.showInfo = false;
    } else {
      this.showInfo = true;
    }
    // this.changeNavShowInfo.emit(this.showInfo);
  }

  handleNavLinkMouseover(event: any) {
    this.activeDropdownMenu = event;
    console.log(event);
  }

  handleDropdownMenuMouseleave() {
    // this.activeDropdownMenu = '';
  }
}
