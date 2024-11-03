import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DropdownContentProductComponent } from '../dropdowns-pritam/dropdown-content-product/dropdown-content-product.component';
import { svg } from '../svg';
// import { svg } from '/';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css',
})
export class MobileMenuComponent implements OnInit, AfterViewInit {
  svg = svg;

  @ViewChild(DropdownContentProductComponent)
  dropdownContentProductComponent!: DropdownContentProductComponent;

  col1 = [
    {
      svg: this.svg.svg_text_messages,
      redirectTo:
        'https://www.fylehq.com/product/conversational-ai-for-expenses',
      headline: 'Text Messages',
      subline: 'The biggest innovation in receipt tracking since mobiles',
    },
    {
      svg: this.svg.receipts,
      redirectTo: 'https://www.fylehq.com/expense-receipt-tracking',
      headline: 'Receipts',
      subline: 'Track receipts from everyday apps in a few clicks',
    },
    {
      svg: this.svg.expenses,
      redirectTo: 'https://www.fylehq.com/product/expenses',
      headline: 'Expenses',
      subline: 'Report expenses, mileages, per-diems and more',
    },
    {
      svg: this.svg.approvals,
      redirectTo: 'https://www.fylehq.com/product/approvals',
      headline: 'Approvals',
      subline: 'Set up any approval workflow and approve on-the-go',
    },
    {
      svg: this.svg.cards,
      redirectTo: 'https://www.fylehq.com/product/cards',
      headline: 'Cards',
      subline: 'Manage and automate credit card reconciliation',
    },
    {
      // svg: this.svg.cards,
      // redirectTo: 'https://www.fylehq.com/product/cards',
      headline: 'Integrations',
      // subline: 'Manage and automate credit card reconciliation',
    },
  ];
  menu = [
    { label: 'Product', active: true },
    { label: 'Solutions', active: false },
    { label: 'Accounting Firms', active: false },
    { label: 'Pricing', active: false },
    { label: 'Resources', active: false },
  ];

  ngOnInit(): void {
    // if (this.dropdownContentProductComponent) {
    // this.col1 = this.dropdownContentProductComponent.cardData.col1;
    // }
  }

  ngAfterViewInit(): void {
    // this.col1 = this.dropdownContentProductComponent.cardData.col1;
    // console.log(this.dropdownContentProductComponent);
    // console.log(this.col1);
  }
}
