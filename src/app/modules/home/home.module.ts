import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [NavComponent, HomeComponent],
  imports: [CommonModule, NgZorroAntdModule, HomeRoutingModule],
})
export class HomeModule {}
