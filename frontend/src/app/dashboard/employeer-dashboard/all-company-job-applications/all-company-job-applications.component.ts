import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-company-job-applications',
  templateUrl: './all-company-job-applications.component.html',
  styleUrls: ['./all-company-job-applications.component.css'],
})
export class AllCompanyJobApplicationsComponent {
  cvPath: string = environment.cvPath;
  imagePath: string = environment.imagePath;
  applications: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let formData = new FormData();
    let empId = localStorage.getItem('user_id');
    formData.append('employer_id', `${empId}`);
    this.http.post(environment.apiUrl + 'application/getAllCompanyApplication.php', formData).subscribe({
      next: (res) => {
        this.applications = res;
      },
    });
  }
}
