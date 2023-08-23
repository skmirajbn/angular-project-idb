import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-job-post',
  templateUrl: './create-job-post.component.html',
  styleUrls: ['./create-job-post.component.css'],
})
export class CreateJobPostComponent {
  loading: boolean = false;
  message = '';
  companies: any;
  categories: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getCategoryInfo();
    this.getCompanyInfo();
  }
  createJob(jobForm: any) {
    this.loading = true;
    let formData = new FormData();
    Object.keys(jobForm).forEach((key) => {
      formData.append(key, jobForm[key]);
    });
    this.http.post(environment.apiUrl + 'jobs/createJobPost.php', formData, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.message = res;
        this.loading = false;
      },
    });
    console.log(formData);
  }
  getCategoryInfo() {
    this.http.get(environment.apiUrl + 'categories/getCategories.php').subscribe({
      next: (res) => {
        this.categories = res;
        console.log(res);
      },
    });
  }
  getCompanyInfo() {
    this.http.get(environment.apiUrl + 'company/getAllCompanies.php').subscribe({
      next: (res) => {
        this.companies = res;
        console.log(res);
      },
    });
  }
}
