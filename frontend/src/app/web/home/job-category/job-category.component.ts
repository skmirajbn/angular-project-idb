import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.css'],
})
export class JobCategoryComponent {
  categoreis!: any[];
  constructor(private getData: GetDataService) {
    this.getDatacall();
  }
  getDatacall() {
    console.log(
      this.getData.getData().subscribe({
        next: (res) => {
          // this.categoreis = res.categoreis;
          this.categoreis = res;
          console.log(res);
        },
      })
    );
  }
}
