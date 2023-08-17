import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('http://localhost/Angular%20Project/Angular%20Project%20IDB%20Final/API/test.php');
  }
}
