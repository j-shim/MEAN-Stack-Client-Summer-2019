import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestClientService } from '../services/rest-client.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private _registerForm: FormGroup;

  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this._registerForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onSubmit(): void {
    // stop here if form is invalid
    // if (this._registerForm.invalid) {
    //   console.error('RegisterForm invalid');
    //   return;
    // }

    const baseUrl = 'http://localhost:3000';
    const apiEndpoint = '/api/users/register';
    this._restClientService.post(baseUrl + apiEndpoint, this._registerForm.value)
      .subscribe(resp => {
        console.log('Registration Successful:', resp);
        this._alertService.alert(true, 'Registration Successful');
        this._router.navigate(['/login']);
      }, err => {
        console.error('Error on Register:', err);
        this._alertService.alert(false, `Error on Register: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
      });

    this._registerForm.reset();
  }
}
