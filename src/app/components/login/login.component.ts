import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestClientService } from '../../services/rest-client/rest-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { SETTINGS } from 'src/app/settings';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private _returnUrl: string;

  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    const RETURN_URL = 'returnUrl';
    this._returnUrl = this._route.snapshot.queryParams[RETURN_URL] || '/';
  }

  public onSubmit(): void {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this._alertService.alert(false, 'Invalid Form');
      return;
    }

    this._restClientService.post(SETTINGS.BASE_URL + SETTINGS.API_USERS_LOGIN, this.loginForm.value)
      .subscribe(
        userWithToken => {
          this._userService.login(userWithToken);

          console.log('Login Successful:', userWithToken);
          this._alertService.alert(true, 'Login Successful');

          this._router.navigate([this._returnUrl]);
        },
        err => {
          console.error('Error on Login:', err);
          this._alertService.alert(false, `Error on Login: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
        }
      );

    this.loginForm.reset();
  }
}
