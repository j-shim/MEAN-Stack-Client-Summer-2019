import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestClientService } from '../../services/rest-client/rest-client.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { SETTINGS } from 'src/app/settings';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onSubmit(): void {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this._alertService.alert(false, 'Invalid Form');
      return;
    }

    this._restClientService.post(SETTINGS.BASE_URL + SETTINGS.API_USERS_REGISTER, this.registerForm.value)
      .subscribe(resp => {
        console.log('Registration Successful:', resp);
        this._alertService.alert(true, 'Registration Successful');
        this._router.navigate(['/login']);
      }, err => {
        console.error('Error on Register:', err);
        this._alertService.alert(false, `Error on Register: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
      });

    this.registerForm.reset();
  }
}
