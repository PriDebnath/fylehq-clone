import { AfterContentInit, Component, ViewChild } from '@angular/core';
interface GetADemoFormField {
  work_email: string;
}
@Component({
  selector: 'app-get-a-demo-modal',
  templateUrl: './get-a-demo-modal.component.html',
  styleUrl: './get-a-demo-modal.component.css',
})
export class GetADemoModalComponent implements AfterContentInit {
  submitting = false;
  thankyouPage = false;
  value: any;
  @ViewChild('input') input: any;
  invalid: any;
  form = {
    work_email: '',
  };
  selectCompanySize = [
    'Under 5',
    '6 to 25',
    '26 to 50',
    '51 to 100',
    '101 to 500',
    '501 to 1000',
    'More than 1000',
  ];
  policy: boolean = false;
  showInfo: any;
  ngAfterContentInit(): void {
    setTimeout(() => {
      console.log(this.input);
    }, 1000);
  }

  handleInputOutput(
    e: Event,
    field_name: 'work_email' | 'full_name' | 'phone_number'
  ) {
    console.log({ e });
  }

  closeModal() {}
  handleGetDemo() {
    this.submitting = true;

    setTimeout(() => {
      this.thankyouPage = true;
    }, 2000);
  }
}
