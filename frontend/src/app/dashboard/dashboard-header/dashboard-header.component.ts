import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../dash-services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent {
  roleName: any = '';
  profilePhoto: any = './assets/img/avatar.jpg';
  constructor(private _auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('user_photo')) {
      this.profilePhoto = environment.imagePath + localStorage.getItem('user_photo');
    }
    if (localStorage.getItem('role_id')) {
      let roleId = localStorage.getItem('role_id');
      if (roleId == '1') {
        this.roleName = 'এডমিন';
      }
      if (roleId == '2') {
        this.roleName = 'ক্যান্ডিডেট';
      }
      if (roleId == '3') {
        this.roleName = 'চাকুরিদাতা';
      }
    }
  }

  logOut(): void {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
