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
      redirectTo:
        'https://www.fylehq.com/product/conversational-ai-for-expenses',
      headline: 'Text Messages',
    },
    {
      redirectTo: 'https://www.fylehq.com/expense-receipt-tracking',
      headline: 'Receipts',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/expenses',
      headline: 'Expenses',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/approvals',
      headline: 'Approvals',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/cards',
      headline: 'Cards',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/integrations',
      headline: 'Integrations',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/mobile-app',
      headline: 'Mobile App',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/payments',
      headline: 'Reimbursements',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/analytics',
      headline: 'Analytics',
    },
    {
      redirectTo: 'https://www.fylehq.com/product/budgets',
      headline: 'Budgets',
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
