import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module';
import { HeaderComponent } from './components/header/header.component';
import { HeadlineAndSublineComponent } from './components/shared/headline-and-subline/headline-and-subline.component';
import { NavFeatureCardComponent } from './components/nav/nav-feature-card/nav-feature-card.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer/html-sanitizer.pipe';
import { DropdownContentProductComponent } from './components/nav/dropdowns-pritam/dropdown-content-product/dropdown-content-product.component';
import { DropdownContentSolutionsComponent } from './components/nav/dropdowns-pritam/dropdown-content-solutions/dropdown-content-solutions.component';
import { DropdownContentResourcesComponent } from './components/nav/dropdowns-pritam/dropdown-content-resources/dropdown-content-resources.component';
import { NavBlogCardComponent } from './components/nav/nav-blog-card/nav-blog-card.component';
import { GetADemoModalComponent } from './components/modals/get-a-demo-modal/get-a-demo-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBrandComponent } from './components/shared/input-brand/input-brand.component';
import { ParagraphComponent } from './components/shared/paragraph/paragraph.component';
import { LinkWithRightArrowComponent } from './components/shared/link-with-right-arrow/link-with-right-arrow.component';
import { MobileMenuComponent } from './components/nav/mobile-menu/mobile-menu.component';
import { FeatureSectionComponent } from './components/shared/feature-section/feature-section.component';
import { CustomerSectionComponent } from './components/shared/customer-section/customer-section.component';
import { RealTimeSpendVisibilityCardComponent } from './components/shared/real-time-spend-visibility-card/real-time-spend-visibility-card.component';
import { OurAttentionSectionComponent } from './components/shared/our-attention-section/our-attention-section.component';
import { BankGradeSecuritySectionComponent } from './components/shared/bank-grade-security-section/bank-grade-security-section.component';
import { FooterComponent } from './components/footer/footer.component';

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
    DropdownContentResourcesComponent,
    NavBlogCardComponent,
    GetADemoModalComponent,
    InputBrandComponent,
    ParagraphComponent,
    LinkWithRightArrowComponent,
    MobileMenuComponent,
    FeatureSectionComponent,
    CustomerSectionComponent,
    RealTimeSpendVisibilityCardComponent,
    OurAttentionSectionComponent,
    BankGradeSecuritySectionComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
