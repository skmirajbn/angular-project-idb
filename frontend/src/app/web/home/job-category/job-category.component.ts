import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.css'],
})
export class JobCategoryComponent {
  categoreis!: any[];
  constructor(private _getData: GetDataService) {
    this.getDatacall();
  }
  getDatacall() {
    this._getData.getCategories().subscribe({
      next: (res) => {
        // this.categoreis = res.categoreis;
        this.categoreis = res;
        console.log(res);
      },
    });
  }
}
