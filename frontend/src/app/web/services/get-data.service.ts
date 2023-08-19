import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  //Getting The categories List
  getCategories(): Observable<any> {
    let getCategoriesEndpoint = '/categories/getCategories.php';
    return this.http.get(environment.apiUrl + getCategoriesEndpoint);
  }

  login(data: any) {
    this.http.post(environment.apiUrl + '/login.php', { data }).subscribe({
      next: function (res: any) {
        localStorage.setItem('token', res.token);
      },
    });
  }
}
