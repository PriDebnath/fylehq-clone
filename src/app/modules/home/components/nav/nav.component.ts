import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { svg } from './svg';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GetADemoModalComponent } from '../modals/get-a-demo-modal/get-a-demo-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  svg = svg;
  showInfo: boolean = true;
  activeDropdownMenu: string = '';

  @Output() changeNavShowInfo = new EventEmitter();

  constructor(public nzModalService: NzModalService) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      this.showInfo = false;
    } else {
      this.showInfo = true;
    }
    // this.changeNavShowInfo.emit(this.showInfo);
  }

  handleNavLinkMouseover(event: any) {
    this.activeDropdownMenu = event;
    console.log(event);
  }

  handleDropdownMenuMouseleave() {
    this.activeDropdownMenu = '';
  }

  handleGetDemo() {
    this.nzModalService.create({
      nzContent: GetADemoModalComponent,
      nzFooter: null,
      nzClosable: false,
    });
  }
}
