import { Injectable } from '@angular/core';
import { RestClientService } from '../rest-client/rest-client.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _restClientService: RestClientService
  ) { }

  public httpPostRegister(body: any): void {
    const baseUrl = 'http://localhost:3000';
    const apiEndpoint = '/api/users/register';
    this._restClientService.post(baseUrl + apiEndpoint, body)
      .subscribe(resp => {
        console.log('########');
        console.log(resp);
        this._router.navigate(['/']);
      }, err => {
        console.error('Error 123:', err);
      });
  }
}
