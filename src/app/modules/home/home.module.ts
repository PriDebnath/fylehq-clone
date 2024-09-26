import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module';
import { HeaderComponent } from './components/header/header.component';
import { HeadlineAndSublineComponent } from './components/headline-and-subline/headline-and-subline.component';

@NgModule({
  declarations: [NavComponent, HomeComponent, HeaderComponent, HeadlineAndSublineComponent],
  imports: [CommonModule, NgZorroAntdModule, HomeRoutingModule],
})
export class HomeModule {}
