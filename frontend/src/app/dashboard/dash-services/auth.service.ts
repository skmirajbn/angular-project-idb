import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role_id');
    localStorage.removeItem('user_id');
    localStorage.removeItem('id');
    localStorage.removeItem('user_photo');
    localStorage.removeItem('user_name');
  }

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    this.http.post(environment.apiUrl + 'login.php', data, { headers }).subscribe({
      next: (res: any) => {
        if (res.login == 'Success') {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role_id', res.role_id);
          localStorage.setItem('user_id', res.user_id);
          localStorage.setItem('user_photo', res.user_photo);
          localStorage.setItem('user_name', res.user_name);
          if (res.role_id == '1') {
            this.router.navigate(['/dashboard']);
          }
          if (res.role_id == '2') {
            this.router.navigate(['/dashboard/candidate']);
          }
          if (res.role_id == '3') {
            this.router.navigate(['/dashboard/employeer']);
          }
          console.log('saved on locastorage');
          console.log(res.token);
        } else {
          console.log('failed');
        }
      },
    });
  }
}
