import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module';
import { HeaderComponent } from './components/header/header.component';
import { HeadlineAndSublineComponent } from './components/headline-and-subline/headline-and-subline.component';
import { NavFeatureCardComponent } from './components/nav/nav-feature-card/nav-feature-card.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer/html-sanitizer.pipe';
import { DropdownContentProductComponent } from './components/nav/dropdowns-pritam/dropdown-content-product/dropdown-content-product.component';
import { DropdownContentSolutionsComponent } from './components/nav/dropdowns-pritam/dropdown-content-solutions/dropdown-content-solutions.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    HeaderComponent,
    HeadlineAndSublineComponent,
    NavFeatureCardComponent,
    HtmlSanitizerPipe,
    DropdownContentProductComponent,
    DropdownContentSolutionsComponent,
  ],
  imports: [CommonModule, NgZorroAntdModule, HomeRoutingModule],
})
export class HomeModule {}
