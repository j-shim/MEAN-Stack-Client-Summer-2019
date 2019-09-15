import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestClientService } from '../rest-client/rest-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _loginForm: FormGroup;
  constructor(
    private _restClientService: RestClientService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this._loginForm = this._formBuilder.group({
      email: '',
      password: ''
    });
  }

  public onSubmit(loginForm: FormGroup): void {
    const baseUrl = 'http://localhost:3000';
    const apiEndpoint = '/api/users/login';
    this._restClientService.post(baseUrl + apiEndpoint, loginForm)
      .subscribe(resp => {
        console.log('########');
        console.log(resp);
      }, err => {
        console.error('Error 123:', err);
      });

    this._loginForm.reset();
  }
}
