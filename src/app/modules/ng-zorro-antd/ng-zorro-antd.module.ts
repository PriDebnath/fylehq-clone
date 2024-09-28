import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [],
  imports: [CommonModule, NzButtonModule, NzDropDownModule],
  exports: [NzButtonModule, NzDropDownModule],
})
export class NgZorroAntdModule {}
