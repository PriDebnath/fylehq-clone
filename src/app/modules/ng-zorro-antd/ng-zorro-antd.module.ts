import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule,
    NzSelectModule,
    NzDropDownModule,
    NzCheckboxModule,
  ],
  exports: [
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzDropDownModule,
    NzCheckboxModule,
  ],
})
export class NgZorroAntdModule {}
