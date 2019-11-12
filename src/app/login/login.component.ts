import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestClientService } from '../services/rest-client/rest-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _loginForm: FormGroup;
  private _returnUrl: string;

  constructor(
    private _restClientService: RestClientService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    const RETURN_URL = 'returnUrl';
    this._returnUrl = this._route.snapshot.queryParams[RETURN_URL] || '/';
  }

  public onSubmit(loginForm: FormGroup): void {

    // stop here if form is invalid
    if (this._loginForm.invalid) {
      return;
    }

    const baseUrl = 'http://localhost:3000';
    const apiEndpoint = '/api/users/login';
    this._restClientService.post(baseUrl + apiEndpoint, loginForm)
      .subscribe(
        resp => {
          console.log('########');
          console.log(resp);

          this._router.navigate([this._returnUrl]);
        },
        err => {
          console.error('Error 123:', err);
        }
      );

    this._loginForm.reset();
  }
}
