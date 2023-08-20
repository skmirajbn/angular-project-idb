import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../dash-services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent {
  constructor(private _auth: AuthService, private router: Router) {}
  logOut(): void {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
