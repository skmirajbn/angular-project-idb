import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-candidate-cv',
  templateUrl: './candidate-cv.component.html',
  styleUrls: ['./candidate-cv.component.css'],
})
export class CandidateCvComponent {
  cvPath: string = environment.cvPath;
  cvTable: any;
  loading: boolean = false;
  message: string = '';
  formData: FormData = new FormData();
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let user_id = localStorage.getItem('user_id');
    let formData = new FormData();
    formData.append('user_id', `${user_id}`);
    this.http.post(environment.apiUrl + 'cv/getCv.php', formData).subscribe({
      next: (res) => {
        this.cvTable = res;
        console.log(res);
      },
    });
  }
  addCv(event: any): void {
    let file = event.target.files[0];
    this.formData.append('cv', file);
  }

  uploadCv(): void {
    this.loading = true;
    let user_id = localStorage.getItem('user_id');
    this.formData.append('user_id', `${user_id}`);
    this.http.post(environment.apiUrl + 'cv/uploadCv.php', this.formData, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.message = res;
        this.loading = false;
      },
    });
  }
}
