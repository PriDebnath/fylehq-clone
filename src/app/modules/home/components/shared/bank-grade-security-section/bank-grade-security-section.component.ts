import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-grade-security-section',
  templateUrl: './bank-grade-security-section.component.html',
  styleUrl: './bank-grade-security-section.component.css',
})
export class BankGradeSecuritySectionComponent {
  list: string[] = ['GDPR', 'SOC 2 Type 1 & Type 2', 'PCI DSS'];
}
