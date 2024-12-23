import {
  Component,
  EventEmitter,
  HostListener,
  Input,
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
  mobileMenu: boolean = false;
  @Input() isMobile: boolean = false;

  activeDropdownMenu: string = '';

  @Output() changeNavShowInfo = new EventEmitter();

  constructor(public nzModalService: NzModalService) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.showInfo = false;
    } else {
      this.showInfo = true;
    }
    // this.changeNavShowInfo.emit(this.showInfo);
  }

  handleNavLinkMouseover(event: any) {
    this.activeDropdownMenu = event;
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
