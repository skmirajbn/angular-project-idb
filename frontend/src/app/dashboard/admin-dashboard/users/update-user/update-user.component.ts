import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  userData!: any;
  user_id!: string;
  loading: boolean = false;
  message: string = '';
  selectedRole: string = '0';
  formData: FormData = new FormData();
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.user_id = params['id'];
    });
    this.getUserData();
  }

  onFileSelected(event: any): void {
    console.log(event.target.files[0]);
    this.selectedImage = event.target.files[0];
  }

  getUserData() {
    let userIdFormdata = new FormData();
    userIdFormdata.append('user_id', this.user_id);
    this.http.post(environment.apiUrl + 'users/getUserData.php', userIdFormdata).subscribe({
      next: (res: any) => {
        this.userData = res;
        this.selectedRole = res.role_id;
        console.log(res);
      },
      error: (err) => {
        console.log('cant get userdata' + err);
      },
    });
  }

  onSubmit(userForm: any): void {
    this.loading = true;
    const url = environment.apiUrl + 'users/updateUser.php';
    // Appending the formdata
    Object.keys(userForm).forEach((key) => {
      this.formData.append(key, userForm[key]);
    });
    if (this.selectedImage != null) {
      this.formData.append('image', this.selectedImage);
    }
    this.formData.append('user_id', this.user_id);

    // Check in console
    console.log(this.formData);

    // Submitting the form Data
    this.http.post(url, this.formData, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.loading = false;
        this.message = res;
        console.log(res);
      },
      error: (err) => {
        console.log('error submitting data' + err);
      },
    });
  }
}
