import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobCategoryComponent } from './home/job-category/job-category.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { SpecialSkilledCategoryComponent } from './home/special-skilled-category/special-skilled-category.component';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web/web.component';
import { JobSpecialCategoryComponent } from './home/job-special-category/job-special-category.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WebComponent, HomeComponent, AboutUsComponent, JobCategoryComponent, SidebarComponent, SpecialSkilledCategoryComponent, JobSpecialCategoryComponent],
  imports: [CommonModule, WebRoutingModule, HttpClientModule],
  exports: [WebComponent],
})
export class WebModule {}
