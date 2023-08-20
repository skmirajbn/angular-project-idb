import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardFooterComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
