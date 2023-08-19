import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateCreateAccountComponent } from './candidate-create-account/candidate-create-account.component';
import { EmployeerCreateAccountComponent } from './employeer-create-account/employeer-create-account.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'create-account/candidate',
        component: CandidateCreateAccountComponent,
      },
      {
        path: 'create-account/employeer',
        component: EmployeerCreateAccountComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutingModule {}
