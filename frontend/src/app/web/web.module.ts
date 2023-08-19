import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { CandidateCreateAccountComponent } from './candidate-create-account/candidate-create-account.component';
import { EmployeerCreateAccountComponent } from './employeer-create-account/employeer-create-account.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobCategoryComponent } from './home/job-category/job-category.component';
import { JobSearchComponent } from './home/job-search/job-search.component';
import { JobSpecialCategoryComponent } from './home/job-special-category/job-special-category.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { SpecialSkilledCategoryComponent } from './home/special-skilled-category/special-skilled-category.component';
import { JobsFilterComponent } from './jobs/jobs-filter/jobs-filter.component';
import { JobsSearchResultComponent } from './jobs/jobs-search-result/jobs-search-result.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web/web.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WebComponent, HomeComponent, AboutUsComponent, JobCategoryComponent, SidebarComponent, SpecialSkilledCategoryComponent, JobSpecialCategoryComponent, JobSearchComponent, JobsComponent, JobsSearchResultComponent, JobsFilterComponent, LoginComponent, CandidateCreateAccountComponent, EmployeerCreateAccountComponent],
  imports: [CommonModule, WebRoutingModule, HttpClientModule],
  exports: [WebComponent],
})
export class WebModule {}
