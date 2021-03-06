import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _timeoutId = undefined;
  // tslint:disable-next-line:no-inferrable-types
  public isSuccess: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  public message: string = '';

  constructor() { }

  public alert(isSuccess: boolean, message: string): void {
    this.isSuccess = isSuccess;
    this.message = message;

    // tslint:disable-next-line:no-inferrable-types
    const activeTime: number = 10000; // disappear in 10 sec

    if (typeof this._timeoutId === 'number') {
      clearTimeout(this._timeoutId);
    }

    this._timeoutId = setTimeout(() => {
      this.message = '';
      this._timeoutId = undefined;
    }, activeTime);
  }
}
