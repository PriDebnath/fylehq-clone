import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-section',
  templateUrl: './customer-section.component.html',
  styleUrl: './customer-section.component.css',
})
export class CustomerSectionComponent {
  cards = [
    {
      employees: '11-50 Employees',
      customer_image: '/assets/images/customer-1.png',
      customer_logo: '/assets/images/customer-1-logo.png',
      feedback:
        'Fyle has made it very convenient for us to see our expenses as soon as employees swipe their cards. We get to know almost right away when employees have missed a receipt with the real-time card feeds, instead of waiting for the bank statement to be uploaded at the end of the week.',
      person_list: [{ name: 'Emma Riehlman', title: 'Accounts Payable' }],
    },
    {
      employees: '101-500 Employees',
      customer_image: '/assets/images/customer-2.png',
      customer_logo: '/assets/images/customer-2-logo.png',
      feedback:
        'Fyle is an exceptional expense management solution that has consistently proven its value. It stands out as a robust and user-friendly platform, meticulously designed to cater to the needs of both employees and finance/accounting professionals alike.',
      person_list: [{ name: 'Ashley Bolnick', title: 'Controller' }],
    },
    {
      employees: '50-200 Employees',
      customer_image: '/assets/images/customer-3.png',
      customer_logo: '/assets/images/customer-3-logo.png',
      feedback:
        "Fyle transformed our employee expense reimbursement process. We've reduced turnaround time and errors caused by paper-based expense processes. Expense fraud is unheard of since all expenses are automatically compliant with our corporate expense policies.",
      person_list: [
        { name: 'Zinaida Ellidou', title: 'Accounts Administrator' },
      ],
    },

    {
      employees: '11-50 Employees',
      customer_image: '/assets/images/customer-4.png',
      customer_logo: '/assets/images/customer-4-logo.png',
      feedback:
        ' Switching to Fyle has truly improved the way we manage our expenses, by saving us a tremendous amount of time that used to be spent manually inputting receipts and reconciling expenses.',
      person_list: [
        { name: 'Carmen Andino', title: 'Executive Assistant to the CEO' },
      ],
    },
    {
      employees: null,
      customer_image: '/assets/images/customer-5.png',
      customer_logo: '/assets/images/customer-5-logo.png',
      feedback:
        'Fyle has been a game-changer for our team! Before Fyle, our team was inconsistent in their expense reporting, and it took hours and days of work for our accountant to manually enter everything in QuickBooks. With Fyle, our team has had consistency and accountability, our accountant spends far less time entering expenses since QuickBooks links with Fyle!',
      person_list: [
        { name: 'Brittany Kizer', title: 'Administration Director' },
      ],
    },
    {
      employees: '101-500 Employees',
      customer_image: '/assets/images/customer-6.png',
      customer_logo: '/assets/images/customer-6-logo.png',
      feedback:
        'Before Fyle, we were trying to track thousands of dollars in credit card expenses and reimbursements across many employees each month with an Excel spreadsheet. It was a nightmare! With the help of the wonderful team at Fyle, we now have a system that has streamlined the process and made it much more professional for all of us at Bright Futures for Youth.',
      person_list: [
        { name: 'Dena Valin Malakian', title: 'Associate Director' },
      ],
    },
    {
      employees: '101-500 Employees',
      customer_image: '/assets/images/customer-7.png',
      customer_logo: '/assets/images/customer-7-logo.png',
      feedback:
        'Fyle was the best expense software we found that connected with NetSuite seamlessly and efficiently, allowed control of our expenses within NetSuite, and had an easy-to-use end user interface.',
      person_list: [
        { name: ' Kyle Shaffer', title: 'NetSuite Administrator' },
        { name: 'Matt Moore', title: 'CPA, Accounting Manager' },
      ],
    },
    {
      employees: '50-100 Employees',
      customer_image: '/assets/images/customer-8.png',
      customer_logo: '/assets/images/customer-8-logo.png',
      feedback:
        'Fyle has tremendously cut the preparation and processing time for our 85 cardholders and admins. Finalizing one reporting period for all cards now takes less than a month, compared to over 2 months before Fyle. The availability of reports on demand is precious. The simple process and unsurpassed support has led to significant time and cost savings.',
      person_list: [
        { name: 'Hermo Grande', title: 'Sr. Financial Operations Analyst' },
      ],
    },

    {
      employees: '101-500 Employees',
      customer_image: '/assets/images/customer-9.png',
      customer_logo: '/assets/images/customer-9-logo.png',
      feedback:
        'The main challenge we face with expense reporting is that we currently have a completely manual process, so our goal was to automate expense gathering, tracking, and reporting to make it easier on our team. Fyle’s ability to capture receipts via email or app, automatically categorize and allocate to various credit card utilizations, & affordability made it a great choice for us.',
      person_list: [{ name: 'Eli Niepoky', title: 'Treasurer' }],
    },
    {
      employees: '11-50 Employees',
      customer_image: '/assets/images/customer-10.png',
      customer_logo: '/assets/images/customer-10-logo.png',
      feedback:
        'The ability to effortlessly capture receipts on-the-go, coupled with its intelligent auto-categorization feature, has saved us countless hours previously spent on manual data entry.',
      person_list: [{ name: 'Michele Tupitza', title: 'Office Manager' }],
    },
    {
      employees: '11-50 Employees',
      customer_image: '/assets/images/customer-11.png',
      customer_logo: '/assets/images/customer-11-logo.png',
      feedback:
        'We love using Fyle because it makes life easier for everyone - our field reps, sales people and back office accounting staff. By allowing our folks in the field to snap a photo of their receipt, and have Fyle take care of the rest, Fyle not only improves efficiency, saving time and money, but actually improves our record keeping. Here at 1andFund, we love using it!',
      person_list: [
        { name: 'Robert L. Macklin', title: 'Chief Operating Officer' },
      ],
    },
    {
      employees: '101-500 Employees',
      customer_image: '/assets/images/customer-12.png',
      customer_logo: '/assets/images/customer-12-logo.png',
      feedback:
        'Fyle works so well for us, it saves us time to reconcile dozens of charges throughout the month and organizes the individual reports coming from each cardholder. It typically takes each cardholder less than an hour each month to complete all necessary transactions to accurately and completely file their expense reports.',
      person_list: [{ name: 'Bob Boyich', title: 'Chief Operating Officer' }],
    },
  ];

  currentCardIndex: number = 0;
  showCardDetails = true;

  nextCard() {
    this.showCardDetails = false;
    setTimeout(() => {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
      this.showCardDetails = true;
    }, 300);
  }

  prevCard() {
    this.showCardDetails = false;
    setTimeout(() => {
      this.currentCardIndex =
        (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
      this.showCardDetails = true;
    }, 300);
    }
}
