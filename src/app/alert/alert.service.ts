import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // tslint:disable-next-line:no-inferrable-types
  public isSuccess: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  public message: string = '';

  constructor() { }

  public alert(isSuccess: boolean, message: string) {
    this.isSuccess = isSuccess;
    this.message = message;

    // tslint:disable-next-line:no-inferrable-types
    const activeTime: number = 5000;

    setTimeout(() => {
      this.message = '';
    }, activeTime);
  }
}
