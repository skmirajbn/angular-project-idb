import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.css'],
})
export class JobsFilterComponent {
  categoreis: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(environment.apiUrl + 'categories/getCategories.php').subscribe({
      next: (res) => {
        this.categoreis = res;
      },
    });
  }
}
