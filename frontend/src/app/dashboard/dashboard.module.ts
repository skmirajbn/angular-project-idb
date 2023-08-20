import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
