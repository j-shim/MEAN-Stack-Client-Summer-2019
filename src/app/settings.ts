import { environment } from 'src/environments/environment';

export class SETTINGS {
  private static BASE_URL_DEV = 'http://localhost:3000';
  private static BASE_URL_PROD = '/api'; // to be changed later
  // private static BASE_URL_PROD = 'https://hi-janice.herokuapp.com'; // to be changed later

  public static BASE_URL = environment.production ? SETTINGS.BASE_URL_PROD : SETTINGS.BASE_URL_DEV;

  public static BLOG_BASE_URL = 'http://blog.naver.com';
  public static API_USERS_REGISTER = '/users/register';
  public static API_USERS_LOGIN = '/users/authenticate';
  public static API_POSTS = '/posts/';
  public static API_BLOG_ALERTS = '/blogAlerts/';
  public static API_BLOG_POSTS = '/blogPosts/';
  public static API_MAILER = '/mailer';
  public static API_REVIEWS = '/reviews';
}
