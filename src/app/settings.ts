import { environment } from 'src/environments/environment';

export class SETTINGS {
  private static BASE_URL_DEV = 'http://localhost:3000';
  private static BASE_URL_PROD = 'https://hi-janice.herokuapp.com'; // to be changed later

  public static BASE_URL = environment.production ? SETTINGS.BASE_URL_PROD : SETTINGS.BASE_URL_DEV;

  public static API_USERS_REGISTER = '/api/users/register';
  public static API_USERS_LOGIN = '/api/users/authenticate';
  public static API_POSTS = '/api/posts/';
}
