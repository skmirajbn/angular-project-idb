import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private _http: HttpClient) {}

  //Getting The categories List
  getCategories(): Observable<any> {
    let getCategoriesEndpoint = '/categories/getCategories.php';
    return this._http.get(environment.apiUrl + getCategoriesEndpoint);
  }
}
