import { environment } from 'src/environments/environment';

export class SETTINGS {
  private static BASE_URL_DEV = 'http://localhost:3000';
  private static BASE_URL_PROD = ''; // to be changed later
  // private static BASE_URL_PROD = 'https://hi-janice.herokuapp.com'; // to be changed later

  public static BASE_URL = environment.production ? SETTINGS.BASE_URL_PROD : SETTINGS.BASE_URL_DEV;

  public static BLOG_BASE_URL = 'http://blog.naver.com';
  public static API_USERS_REGISTER = '/api/users/register';
  public static API_USERS_LOGIN = '/api/users/authenticate';
  public static API_POSTS = '/api/posts/';
  public static API_BLOG_ALERTS = '/api/blogAlerts/';
  public static API_BLOG_POSTS = '/api/blogPosts/';
  public static API_MAILER = '/api/mailer';
}
