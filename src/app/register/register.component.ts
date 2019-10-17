import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onSubmit(): void {
    this._registerService.httpPostRegister(this._registerForm.value);

    this._registerForm.reset();
  }
}
