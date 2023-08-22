import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-job-post',
  templateUrl: './single-job-post.component.html',
  styleUrls: ['./single-job-post.component.css'],
})
export class SingleJobPostComponent {
  loading: boolean = false;
  message: string = '';
  role_id: any = localStorage.getItem('role_id');
  id!: any;
  job!: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit() {
    let formData = new FormData();
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    formData.append('job_id', this.id);
    this.http.post(environment.apiUrl + 'jobs/getSingleJob.php', formData).subscribe({
      next: (res) => {
        this.job = res;
        console.log(res);
      },
    });
  }
  appSubmit() {
    this.loading = true;
    let formData = new FormData();
    let user_id = localStorage.getItem('user_id');
    formData.append('user_id', `${user_id}`);
    formData.append('job_id', this.job.job_id);

    this.http.post(environment.apiUrl + 'application/submitApplication.php', formData, { responseType: 'text' }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.message = res;
      },
    });
  }
}
