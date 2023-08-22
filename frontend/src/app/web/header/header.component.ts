import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/dashboard/dash-services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dahsboardLink!: any;
  profilePhoto: any = './assets/img/avatar.jpg';
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('user_photo')) {
      this.profilePhoto = environment.imagePath + localStorage.getItem('user_photo');
    }
    if (localStorage.getItem('role_id') == '1') {
      this.dahsboardLink = '/dashboard';
    } else if (localStorage.getItem('role_id') == '2') {
      this.dahsboardLink = '/dashboard/candidate';
    } else {
      this.dahsboardLink = '/dashboard/employeer';
    }
  }

  isLoggedIn(): boolean {
    return this._auth.isLoggedIn();
  }
  logOut(): void {
    this._auth.logout();
    this.router.navigate(['./login']);
  }
}
