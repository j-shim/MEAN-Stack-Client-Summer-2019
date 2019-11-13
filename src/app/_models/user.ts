export class User {
  public id?: number;
  public firstname: string;
  public lastname: string;
  public email: string;
  public password?: string;
  public token?: string;

  constructor() {
    this.id = null;
    this.firstname = null;
    this.lastname = null;
    this.email = null;
    this.password = null;
    this.token = null;
  }
}
