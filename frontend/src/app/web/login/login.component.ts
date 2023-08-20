import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private _getData: GetDataService) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }
  onSubmit() {
    let formData = this.loginForm.value;

    let params = new HttpParams().set('username', formData.username).set('password', formData.password);
    this._getData.login(params.toString());
  }
}
