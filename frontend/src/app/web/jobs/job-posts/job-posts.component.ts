import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.css'],
})
export class JobPostsComponent {
  jobs!: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(environment.apiUrl + 'jobs/getAllJobs.php').subscribe({
      next: (res) => {
        this.jobs = res;
        console.log(res);
      },
    });
  }
}
