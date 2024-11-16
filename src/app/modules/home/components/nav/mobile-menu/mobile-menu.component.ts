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
  onExtraClick($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }
  svg = svg;

  @ViewChild(DropdownContentProductComponent)
  dropdownContentProductComponent!: DropdownContentProductComponent;
  menu = [
    { label: 'Product', active: false },
    { label: 'Solutions', active: false },
    {
      label: 'Accounting Firms',
      active: false,
      link: 'https://www.fylehq.com/partners/accounting-firms',
    },
    { label: 'Pricing', active: false, link: 'https://www.fylehq.com/pricing' },
    { label: 'Resources', active: false },
  ];
  productsData = [
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

  solutionsData = [
    {
      redirectTo: 'https://www.fylehq.com/solutions/industry/construction',
      headline: 'Construction',
    },
    {
      redirectTo:
        'https://www.fylehq.com/solutions/industry/non-profit-organizations',
      headline: 'Non-profit',
    },
    {
      redirectTo:
        'https://www.fylehq.com/solutions/industry/information-technology',
      headline: 'Technology',
    },
    {
      redirectTo:
        'https://www.fylehq.com/solutions/industry/professional-services',
      headline: 'Professional services',
    },
  ];

  resourceLearnData = [
    {
      redirectTo: 'https://www.fylehq.com/blog',
      headline: 'Blog',
    },
    {
      redirectTo:
        'https://help.fylehq.com/?_gl=1*rgh93t*_gcl_au*NDMyODI2MDEzLjE3MzE1NjU3NDQ.',
      headline: 'Help center',
    },
    {
      redirectTo: 'https://www.fylehq.com/resources/guide',
      headline: 'Guides and Ebooks',
    },
  ];

  resourceCustomersData = [
    {
      redirectTo: 'https://www.fylehq.com/customer-success',
      headline: 'Customer success',
    },
    {
      redirectTo: 'https://www.fylehq.com/resources/templates',
      headline: 'Help center',
    },
    {
      redirectTo: 'https://www.fylehq.com/resources/guide',
      headline: 'Implementation',
    },
  ];

  resourceCompanyData = [
    {
      redirectTo: 'https://www.fylehq.com/partners',
      headline: 'Partners',
    },
    {
      redirectTo: 'https://www.fylehq.com/partners/accounting-firms',
      headline: 'Accounting Firms',
    },
    {
      redirectTo: 'https://www.fylehq.com/banks',
      headline: 'Banks',
    },
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
