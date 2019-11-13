import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loginUser: User;
  public isUserLoggedIn: boolean;

  constructor(private _alertService: AlertService) {
    this.loginUser = new User();
    this.isUserLoggedIn = false;
  }

  // public getLoginUser(): User {
  //   return this.loginUser;
  // }

  public login(user: User | any): void {
    if ( user instanceof User) {
      this.loginUser = user;

      this.isUserLoggedIn = true;
    } else {
      this.loginUser.id        =        user.id !== undefined ? user.id : null;
      this.loginUser.firstname = user.firstname !== undefined ? user.firstname : null;
      this.loginUser.lastname  =  user.lastname !== undefined ? user.lastname : null;
      this.loginUser.email     =     user.email !== undefined ? user.email : null;
      this.loginUser.password  =  user.password !== undefined ? user.password : null;
      this.loginUser.token     =     user.token !== undefined ? user.token : null;

      this.isUserLoggedIn = true;
    }
  }

  public logout(): void {
    this.loginUser.id        = null;
    this.loginUser.firstname = null;
    this.loginUser.lastname  = null;
    this.loginUser.email     = null;
    this.loginUser.password  = null;
    this.loginUser.token     = null;

    this.isUserLoggedIn = false;

    this._alertService.alert(true, 'Logout Successful');
  }
}
