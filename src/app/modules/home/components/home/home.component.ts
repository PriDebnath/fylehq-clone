import {
  Component,
  OnInit,
  HostListener,
  AfterContentChecked,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterContentChecked {
  tickList: string[] = [
    'No learning curve for employees',
    'Collect receipts 5X faster',
    'Automated AI-based coding',
  ];
  showInfo: boolean = true;
  isMobile: boolean = false;

  pageTitle: string = 'Fyle | Intelligent Expense Management Software';
  constructor(private title: Title) {}

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
}
