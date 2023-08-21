import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent {
  loading: boolean = false;
  users!: any;
  imagePath: string = environment.imagePath;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.http.get(environment.apiUrl + 'users/getUsers.php').subscribe({
      next: (res: any) => {
        this.users = res;
      },
    });
  }
  deleteUser(id: any) {
    this.loading = true;
    this.fetchAllData();
    let formData = new FormData();
    formData.append('id', id);
    this.http.post(environment.apiUrl + 'users/deleteUser.php', formData, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
      },
    });
  }
}
