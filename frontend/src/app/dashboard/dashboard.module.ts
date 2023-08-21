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

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardFooterComponent, AdminDashboardComponent, AdminDashboardSidebarComponent, AdminDashboardSummaryComponent, ViewUsersComponent, AddUserComponent, UpdateUserComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
