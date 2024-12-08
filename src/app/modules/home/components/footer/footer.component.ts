import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerData = [
    {
      title: 'Product',
      items: [
        {
          text: 'Text Messages',
          redirectTo:
            'https://www.fylehq.com/product/conversational-ai-for-expenses',
        },
        {
          text: 'Receipts',
          redirectTo: 'https://www.fylehq.com/expense-receipt-tracking',
        },
        {
          text: 'Expenses',
          redirectTo: 'https://www.fylehq.com/product/expenses',
        },
        { text: 'Cards', redirectTo: null }, // Title without a redirectTo
        {
          text: 'Visa',
          subItems: [
            {
              text: 'Visa',
              redirectTo: 'https://www.fylehq.com/product/cards/visa',
            },
            {
              text: 'Mastercard',
              redirectTo: 'https://www.fylehq.com/product/cards/mastercard',
            },
            {
              text: 'Amex',
              redirectTo:
                'https://www.fylehq.com/product/cards/#american-express',
            },
            {
              text: 'Virtual cards',
              redirectTo:
                'https://www.fylehq.com/product/american-express-virtual-cards',
            },
          ],
        },
        {
          text: 'Mobile App',
          redirectTo: 'https://www.fylehq.com/product/mobile-app',
        },
        {
          text: 'Approvals',
          redirectTo: 'https://www.fylehq.com/product/approvals',
        },
        {
          text: 'Reimbursements',
          redirectTo: 'https://www.fylehq.com/product/payments',
        },
        {
          text: 'Budgets',
          redirectTo: 'https://www.fylehq.com/product/budgets',
        },
        {
          text: 'Compliance',
          redirectTo: 'https://www.fylehq.com/product/compliance',
        },
        {
          text: 'Analytics',
          redirectTo: 'https://www.fylehq.com/product/analytics',
        },
        {
          text: 'Finance Operations',
          redirectTo: 'https://www.fylehq.com/product/finance-operations',
        },
        {
          text: 'Security',
          redirectTo: 'https://www.fylehq.com/product/security',
        },
        { text: 'All Features', redirectTo: 'https://www.fylehq.com/product' },
      ],
    },
    {
      title: 'Integrations',
      items: [
        {
          text: 'Netsuite',
          redirectTo:
            'https://www.fylehq.com/product/integrations/netsuite-accounting-software',
        },

        {
          text: 'Xero',
          redirectTo:
            'https://www.fylehq.com/product/integrations/xero-accounting-software',
        },
        {
          text: 'Sage Intacct',
          redirectTo:
            'https://www.fylehq.com/product/integrations/sage-intacct-accounting-software',
        },
        {
          text: 'QuickBooks Online',
          redirectTo:
            'https://www.fylehq.com/product/integrations/quickbooks-online-accounting-software',
        },
        {
          text: 'QuickBooks Desktop',
          redirectTo:
            'https://www.fylehq.com/product/integrations/quickbooks-desktop-accounting-software',
        },
        {
          text: 'Sage 300 CRE (Beta)',
          redirectTo:
            'https://www.fylehq.com/product/integrations/sage-300-cre-accounting-software',
        },
        {
          text: 'TravelPerk',
          redirectTo:
            'https://www.fylehq.com/product/integrations/travelperk-travel-software',
        },
        {
          text: 'Bamboo HR',
          redirectTo: 'https://www.fylehq.com/product/integrations/bamboo-hr',
        },
      ],
    },
    {
      title: 'Industries',
      items: [
        {
          text: 'Construction',
          redirectTo: 'https://www.fylehq.com/solutions/industry/construction',
        },
        {
          text: 'Non-profits',
          redirectTo:
            'https://www.fylehq.com/solutions/industry/non-profit-organizations',
        },
        {
          text: 'Technology',
          redirectTo:
            'https://www.fylehq.com/solutions/industry/information-technology',
        },
        {
          text: 'Professional Services',
          redirectTo:
            'https://www.fylehq.com/solutions/industry/professional-services',
        },
      ],
    },
    {
      title: 'Business Expertise',
      items: [
        {
          text: 'Expense Management Software',
          redirectTo: 'https://www.fylehq.com/expense-management-software',
        },
        {
          text: 'Expense Report Software',
          redirectTo: 'https://www.fylehq.com/expense-report-software',
        },
        {
          text: 'Expense Reimbursement Software',
          redirectTo: 'https://www.fylehq.com/expense-reimbursement-software',
        },
        {
          text: 'Receipt Management Software',
          redirectTo: 'https://www.fylehq.com/receipt-management-software',
        },
        {
          text: 'Travel Expense Management',
          redirectTo: 'https://www.fylehq.com/travel-expense-management',
        },
        {
          text: 'Automated Expense Reporting',
          redirectTo: 'https://www.fylehq.com/automated-expense-reporting',
        },
        {
          text: 'Business Mileage Tracker',
          redirectTo: 'https://www.fylehq.com/business-mileage-tracker-app',
        },
        {
          text: 'American Express Expense Management',
          redirectTo:
            'https://www.fylehq.com/american-express-expense-management',
        },
        {
          text: 'QuickBooks Expense Tracking',
          redirectTo: 'https://www.fylehq.com/quickbooks-expense-tracking',
        },
        {
          text: 'Business Credit Card Management',
          redirectTo: 'https://www.fylehq.com/business-credit-card-management',
        },
        {
          text: 'Accounting Automation Software',
          redirectTo: 'https://www.fylehq.com/accounting-automation-software',
        },
      ],
    },
    {
      title: 'Compare',
      items: [
        {
          text: 'Fyle vs Expensify',
          redirectTo: 'https://www.fylehq.com/alternative/expensify',
        },
        {
          text: 'Fyle vs Concur',
          redirectTo: 'https://www.fylehq.com/alternative/concur',
        },
        {
          text: 'Fyle vs Zoho Expense',
          redirectTo: 'https://www.fylehq.com/ppc/alternative/zoho-expense',
        },
        {
          text: 'Fyle vs Chrome River',
          redirectTo: 'https://www.fylehq.com/alternative/chromeriver',
        },
        {
          text: 'Fyle vs Certify',
          redirectTo: 'https://www.fylehq.com/alternative/certify',
        },
      ],
    },
    {
      title: 'Get Started',
      items: [
        { text: 'Pricing', redirectTo: 'https://www.fylehq.com/pricing' },
        { text: 'Get a Demo', redirectTo: 'https://www.fylehq.com/#' },
        {
          text: 'Sign In',
          redirectTo:
            'https://app.fylehq.com/app/accounts/?_gl=1*1aj4rhj*_gcl_au*NDMyODI2MDEzLjE3MzE1NjU3NDQ.#/signin',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        { text: 'Blog', redirectTo: 'https://www.fylehq.com/blog' },
        {
          text: 'E-books',
          redirectTo: 'https://www.fylehq.com/resources/guide',
        },
        {
          text: 'Webinars',
          redirectTo: 'https://www.fylehq.com/resources/webinars',
        },
        {
          text: 'Expense Report Template',
          redirectTo: 'https://www.fylehq.com/templates/expense-reports',
        },
        {
          text: 'Refer a Client',
          redirectTo: 'https://www.fylehq.com/partner-referral',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        { text: 'About Us', redirectTo: 'https://www.fylehq.com/company' },
        {
          text: 'Customer Success',
          redirectTo: 'https://www.fylehq.com/customer-success',
        },
        {
          text: 'Customer Reviews',
          redirectTo: 'https://www.fylehq.com/customers/reviews',
        },
        { text: 'Partners', redirectTo: 'https://www.fylehq.com/partners' },
        { text: 'Team', redirectTo: 'https://www.fylehq.com/company/team' },
        {
          text: 'Team Blog',
          redirectTo:
            'https://stories.fylehq.com/?_gl=1*1x0yb1r*_gcl_au*NDMyODI2MDEzLjE3MzE1NjU3NDQ.',
        },
        {
          text: 'POSH @ Fyle',
          redirectTo:
            'https://3906991.fs1.hubspotusercontent-na1.net/hubfs/3906991/Fyle_POSH_Policy.pdf',
        },
        {
          text: 'Careers',
          redirectTo: 'https://www.fylehq.com/company/team/join',
        },
        { text: 'Press', redirectTo: 'https://www.fylehq.com/company/press' },
      ],
    },
  ];
}
