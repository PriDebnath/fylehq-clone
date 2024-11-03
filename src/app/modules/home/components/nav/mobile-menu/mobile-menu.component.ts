import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css',
})
export class MobileMenuComponent {
  //  @ViewChild()
  menu = [
    { label: 'Product', active: false },
    { label: 'Solutions', active: false },
    { label: 'Accounting Firms', active: false },
    { label: 'Pricing', active: false },
    { label: 'Resources', active: false },
  ];
}
