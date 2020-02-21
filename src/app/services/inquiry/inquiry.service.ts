import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  // tslint:disable-next-line:no-inferrable-types
  private _submitTime: number = 0;

  constructor() { }

  public isTooEarlyToSubmitAgain(currentTime: number): boolean {
    if (this._submitTime === 0) {
      return false;
    }

    const MIN_WAIT_TIME_IN_MILLISECONDS: number = 24 * 60 * 60 * 1000;

    if (currentTime - this._submitTime >= MIN_WAIT_TIME_IN_MILLISECONDS) {
      return false;
    } else {
      return true;
    }
  }

  public setSubmitTime(currentTime: number): void {
    this._submitTime = currentTime;
  }
}
