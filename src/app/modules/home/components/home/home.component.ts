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
  showNavInfo: boolean = true;
  pageTitle: string = 'Fyle | Intelligent Expense Management Software';
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.startObserveringImages();
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
  handleChangeNavShowInfo(showNavInfo: boolean) {
    this.showNavInfo = showNavInfo;
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
