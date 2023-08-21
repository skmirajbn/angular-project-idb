import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  loading: boolean = false;
  message: string = '';
  selectedRole: string = '0';
  formData: FormData = new FormData();
  selectedImage: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    console.log(event.target.files[0]);
    this.selectedImage = event.target.files[0];
  }

  onSubmit(userForm: any): void {
    this.loading = true;
    const url = environment.apiUrl + 'users/createUser.php';
    // Appending the formdata
    Object.keys(userForm).forEach((key) => {
      this.formData.append(key, userForm[key]);
    });
    if (this.selectedImage != null) {
      this.formData.append('image', this.selectedImage);
    }

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
