import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient, private router: Router) {}

  //Getting The categories List
  getCategories(): Observable<any> {
    let getCategoriesEndpoint = '/categories/getCategories.php';
    return this.http.get(environment.apiUrl + getCategoriesEndpoint);
  }

  login(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    this.http.post(environment.apiUrl + '/login.php', data, { headers }).subscribe({
      next: (res: any) => {
        console.log(res.login);
      },
    });
  }
}
