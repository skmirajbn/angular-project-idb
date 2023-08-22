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
  profilePhoto: any = './assets/img/avatar.jpg';
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('user_photo')) {
      this.profilePhoto = environment.imagePath + localStorage.getItem('user_photo');
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
