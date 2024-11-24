import {
  Component,
  OnInit,
  HostListener,
  AfterContentChecked,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GetADemoModalComponent } from '../modals/get-a-demo-modal/get-a-demo-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterContentChecked {
  realTimeSpendVisibilityCardData = [
    {
      imgSrc: '/assets/images/monitor-employee-spend-in-real-time.png',
      headline: 'Monitor employee spend in real-time',
      list: [
        'Get real-time visibility into card spend and out of pocket expenses in one place.',
        'Drill down your spend data to uncover usage patterns, identify new opportunities for better cashflow management.',
      ],
    },
    {
      imgSrc: '/assets/images/Eliminate-wasted-spend.png',
      headline: 'Eliminate wasted spend',
      list: [
        'Create budgets for different Projects, Departments, categories and more.',
        'Get notified every time you exceed your budgets.',
      ],
    },
    {
      imgSrc: '/assets/images/approvals-workflow.png',
      headline: 'Ensure expenses are approved easily',
      list: [
        'Configure approval workflows and let managers approve expenses on-the-go.',
        'Be audit-ready with centralized storage of all billable, expense receipts, and reimbursable expenses.',
      ],
    },
  ];
  tickList: string[] = [
    'No learning curve for employees',
    'Collect receipts 5X faster',
    'Automated AI-based coding',
  ];
  showInfo: boolean = true;
  isMobile: boolean = false;

  pageTitle: string = 'Fyle | Intelligent Expense Management Software';
  constructor(private title: Title, public nzModalService: NzModalService) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.startObserveringImages();
    this.checkScreenSize();
  }

  ngAfterContentChecked(): void {}
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 50) {
  //     this.showNavInfo = false;
  //   } else {
  //     this.showNavInfo = true;
  //   }
  // }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the width as per your mobile breakpoint
    if (this.isMobile) {
      this.showInfo = false;
    }
  }

  handleChangeNavShowInfo(showNavInfo: boolean) {
    this.showInfo = showNavInfo;
  }

  startObserveringImages() {
    // Select all images you want to apply the fade-in effect
    const images = document.querySelectorAll('.fade-in-img');
    console.log({ images });

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class when the image is in view
          observer.unobserve(entry.target); // Stop observing once the image has appeared
        }
      });
    });

    // Observe each image
    images.forEach((image) => {
      observer.observe(image);
    });
  }

  handleGetDemo() {
    this.nzModalService.create({
      nzContent: GetADemoModalComponent,
      nzFooter: null,
      nzClosable: false,
    });
  }
}
