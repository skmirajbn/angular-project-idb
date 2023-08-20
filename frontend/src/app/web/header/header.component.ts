import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/dashboard/dash-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private _auth: AuthService, private router: Router) {}
  isLoggedIn(): boolean {
    return this._auth.isLoggedIn();
  }
  logOut(): void {
    this._auth.logout();
    this.router.navigate(['./login']);
  }
}
