import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminDashboardSidebarComponent } from './admin-dashboard/admin-dashboard-sidebar/admin-dashboard-sidebar.component';
import { AdminDashboardSummaryComponent } from './admin-dashboard/admin-dashboard-summary/admin-dashboard-summary.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './admin-dashboard/users/add-user/add-user.component';
import { ViewUsersComponent } from './admin-dashboard/users/view-users/view-users.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateUserComponent } from './admin-dashboard/users/update-user/update-user.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { EmployeerDashboardComponent } from './employeer-dashboard/employeer-dashboard.component';
import { CandidateDashboardSummaryComponent } from './candidate-dashboard/candidate-dashboard-summary/candidate-dashboard-summary.component';
import { CandidateDashboardSidebarComponent } from './candidate-dashboard/candidate-dashboard-sidebar/candidate-dashboard-sidebar.component';
import { EmployeerDashboardSidebarComponent } from './employeer-dashboard/employeer-dashboard-sidebar/employeer-dashboard-sidebar.component';
import { EmployeerDashboardSummaryComponent } from './employeer-dashboard/employeer-dashboard-summary/employeer-dashboard-summary.component';
import { CandidateCvComponent } from './candidate-dashboard/candidate-cv/candidate-cv.component';
import { AllCompanyJobApplicationsComponent } from './employeer-dashboard/all-company-job-applications/all-company-job-applications.component';
import { AllEmployeerJobPostComponent } from './employeer-dashboard/all-employeer-job-post/all-employeer-job-post.component';
import { CreateJobPostComponent } from './employeer-dashboard/create-job-post/create-job-post.component';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardFooterComponent, AdminDashboardComponent, AdminDashboardSidebarComponent, AdminDashboardSummaryComponent, ViewUsersComponent, AddUserComponent, UpdateUserComponent, CandidateDashboardComponent, EmployeerDashboardComponent, CandidateDashboardSummaryComponent, CandidateDashboardSidebarComponent, EmployeerDashboardSidebarComponent, EmployeerDashboardSummaryComponent, CandidateCvComponent, AllCompanyJobApplicationsComponent, AllEmployeerJobPostComponent, CreateJobPostComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
