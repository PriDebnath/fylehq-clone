import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Fyle | Intelligent Expense Management Software';
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }
}
