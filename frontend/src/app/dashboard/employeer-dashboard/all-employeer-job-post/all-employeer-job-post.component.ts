import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-employeer-job-post',
  templateUrl: './all-employeer-job-post.component.html',
  styleUrls: ['./all-employeer-job-post.component.css'],
})
export class AllEmployeerJobPostComponent {
  loading: boolean = false;
  empJobs: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getJobsData();
  }
  getJobsData() {
    this.loading = true;
    let formData = new FormData();
    let employerId = localStorage.getItem('user_id');
    formData.append('employer_id', `${employerId}`);
    this.http.post(environment.apiUrl + 'jobs/getEmployerJobs.php', formData).subscribe({
      next: (res) => {
        this.empJobs = res;
        this.loading = false;
      },
    });
  }
  deleteJob(id: number) {
    this.loading = true;
    console.log('clicked');
    let formData = new FormData();
    let jobId = id;
    formData.append('job_id', `${jobId}`);
    this.http.post(environment.apiUrl + 'jobs/deleteJobs.php', formData, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.getJobsData();
        console.log('jobsdata called');
        this.loading = false;
      },
    });
  }
}
