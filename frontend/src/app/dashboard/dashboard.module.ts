import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardSidebarComponent } from './admin-dashboard/admin-dashboard-sidebar/admin-dashboard-sidebar.component';
import { AdminDashboardSummaryComponent } from './admin-dashboard/admin-dashboard-summary/admin-dashboard-summary.component';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardFooterComponent, AdminDashboardComponent, AdminDashboardSidebarComponent, AdminDashboardSummaryComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
