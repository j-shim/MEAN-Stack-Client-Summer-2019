import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  private _submitTime: number;

  constructor() {
    this._submitTime = 0;
  }

  public isTooEarlyToSubmitAgain(currentTime: number): boolean {
    if (this._submitTime === 0) {
      this._submitTime = currentTime;
      return false;
    }

    const MIN_WAIT_TIME_IN_MILLISECONDS: number = 24 * 60 * 60 * 1000;

    if (currentTime - this._submitTime >= MIN_WAIT_TIME_IN_MILLISECONDS) {
      this._submitTime = currentTime;
      return false;
    } else {
      return true;
    }
  }
}
