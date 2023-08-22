import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardSummaryComponent } from './admin-dashboard/admin-dashboard-summary/admin-dashboard-summary.component';
import { AddUserComponent } from './admin-dashboard/users/add-user/add-user.component';
import { UpdateUserComponent } from './admin-dashboard/users/update-user/update-user.component';
import { ViewUsersComponent } from './admin-dashboard/users/view-users/view-users.component';
import { CandidateCvComponent } from './candidate-dashboard/candidate-cv/candidate-cv.component';
import { CandidateDashboardSummaryComponent } from './candidate-dashboard/candidate-dashboard-summary/candidate-dashboard-summary.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { AuthGuard } from './dash-services/auth.guard';
import { CandidateGurad } from './dash-services/candidate.guard';
import { EmployeerGuard } from './dash-services/employeer.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCompanyJobApplicationsComponent } from './employeer-dashboard/all-company-job-applications/all-company-job-applications.component';
import { EmployeerDashboardSummaryComponent } from './employeer-dashboard/employeer-dashboard-summary/employeer-dashboard-summary.component';
import { EmployeerDashboardComponent } from './employeer-dashboard/employeer-dashboard.component';

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
  {
    path: 'candidate',
    component: CandidateDashboardComponent,
    canActivate: [CandidateGurad],
    children: [
      {
        path: '',
        component: CandidateDashboardSummaryComponent,
      },
      {
        path: 'cv',
        component: CandidateCvComponent,
      },
    ],
  },
  {
    path: 'employeer',
    component: EmployeerDashboardComponent,
    canActivate: [EmployeerGuard],
    children: [
      {
        path: '',
        component: EmployeerDashboardSummaryComponent,
      },
      {
        path: 'applications',
        component: AllCompanyJobApplicationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
