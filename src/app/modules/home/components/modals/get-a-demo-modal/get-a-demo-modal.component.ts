import { AfterContentInit, Component, ViewChild } from '@angular/core';
interface GetADemoFormField {
  work_email?: string;
  full_name?: string;
  phone_number?: string;
  // policy?: boolean;
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
  form: GetADemoFormField = {
    work_email: '',
    full_name: '',
    phone_number: '',
    // policy: undefined,
  };
  formTouched: boolean = false;
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
    value: string,
    field_name: 'work_email' | 'full_name' | 'phone_number'
  ) {
    this.formTouched = true;
    this.form = {
      [field_name]: value,
    };
  }

  closeModal() {}

  handleGetDemo() {
    this.formTouched = true;
    if (this.isFormValid(this.form)) {
      return;
    }

    this.submitting = true;

    setTimeout(() => {
      this.thankyouPage = true;
    }, 2000);
  }

  isFormValid(form: GetADemoFormField): boolean {
    let result = false;
    for (let key in form) {
      console.log(form[key as keyof GetADemoFormField]);
      if (!form[key as keyof GetADemoFormField]) {
        result = true;
      }
    }
    console.log({ result });

    return result;
  }
}
