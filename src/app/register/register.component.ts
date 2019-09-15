import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private _registerForm: FormGroup;
  constructor(
    private _registerService: RegisterService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this._registerForm = this._formBuilder.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: ''
    });
  }

  public onSubmit(registerForm: FormGroup): void {
    this._registerService.httpPostRegister(registerForm.value);

    this._registerForm.reset();
  }
}
