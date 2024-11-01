import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GetADemoModalComponent } from '../modals/get-a-demo-modal/get-a-demo-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public nzModalService: NzModalService) {}

  handleGetDemo() {
    this.nzModalService.create({
      nzContent: GetADemoModalComponent,
      nzFooter: null,
      nzClosable: false,
    });
  }
}
