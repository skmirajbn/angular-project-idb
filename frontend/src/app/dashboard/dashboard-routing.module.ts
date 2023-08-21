import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardSummaryComponent } from './admin-dashboard/admin-dashboard-summary/admin-dashboard-summary.component';
import { AddUserComponent } from './admin-dashboard/users/add-user/add-user.component';
import { UpdateUserComponent } from './admin-dashboard/users/update-user/update-user.component';
import { ViewUsersComponent } from './admin-dashboard/users/view-users/view-users.component';
import { AuthGuard } from './dash-services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardSummaryComponent,
      },
      {
        path: 'view-users',
        component: ViewUsersComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'update-user/:id',
        component: UpdateUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
