import { Component } from '@angular/core';
import { svg } from '../../svg';

@Component({
  selector: 'app-dropdown-content-product',
  templateUrl: './dropdown-content-product.component.html',
  styleUrl: './dropdown-content-product.component.css',
})
export class DropdownContentProductComponent {
  svg = svg;
  cardData = {
    col1: [
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
    ],
    col2: [
      {
        svg: this.svg.cards,
        redirectTo: 'https://www.fylehq.com/product/cards',
        headline: 'Cards',
        subline: 'Manage and automate credit card reconciliation',
      },
    ],
    col4: [
      {
        svg: this.svg.mobile_app,
        redirectTo: 'https://www.fylehq.com/product/mobile-app',
        headline: 'Mobile App',
        subline: "Access everything from Fyle's easy to use mobile app",
      },
      {
        svg: this.svg.reimbursements,
        redirectTo: 'https://www.fylehq.com/product/payments',
        headline: 'Reimbursements',
        subline: 'Streamline employee reimbursements with ACH',
      },
      {
        svg: this.svg.expenses,
        redirectTo: 'https://www.fylehq.com/product/analytics',
        headline: 'Analytics',
        subline: 'Configure budgets and track spend against them',
      },
      {
        svg: this.svg.approvals,
        redirectTo: 'https://www.fylehq.com/product/budgets',
        headline: 'Budgets',
        subline: 'Get rich insights into your company spend',
      },
    ],
  };

  // Define list data for each column
  listData = {
    col2: [
      { text: 'Visa', link: 'https://www.fylehq.com/product/cards/visa' },
      {
        text: 'Mastercard',
        link: 'https://www.fylehq.com/product/cards/mastercard',
      },
      {
        text: 'American Express',
        link: 'https://www.fylehq.com/product/cards/#american-express',
      },
      {
        text: 'Any credit card',
        link: 'https://www.fylehq.com/product/cards/#any-other-business-credit-card',
      },
    ],
    col3: [
      {
        text: 'NetSuite',
        link: 'https://www.fylehq.com/product/integrations/netsuite-accounting-software',
      },
      {
        text: 'Sage Intacct',
        link: 'https://www.fylehq.com/product/integrations/sage-intacct-accounting-software',
      },
      {
        text: 'QuickBooks Online',
        link: 'https://www.fylehq.com/product/integrations/quickbooks-online-accounting-software',
      },
      {
        text: 'QuickBooks Desktop',
        link: 'https://www.fylehq.com/product/integrations/quickbooks-desktop-accounting-software',
      },
      {
        text: 'Sage 300 CRE (Beta)',
        link: 'https://www.fylehq.com/product/integrations/sage-300-cre-accounting-software',
      },
      {
        text: 'Xero',
        link: 'https://www.fylehq.com/product/integrations/xero-accounting-software',
      },
    ],
  };
}
