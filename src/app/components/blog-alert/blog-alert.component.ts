import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { SETTINGS } from 'src/app/settings';

@Component({
  selector: 'app-blog-alert',
  templateUrl: './blog-alert.component.html',
  styleUrls: ['./blog-alert.component.scss']
})
export class BlogAlertComponent implements OnInit {

  public blogAlerts: Array<any> = [];
  constructor(
    private _restClientService: RestClientService
  ) { }

  ngOnInit() {
    this._init();
  }

  private _init(): void {
    const API_ENDPOINT: string = SETTINGS.BASE_URL + SETTINGS.API_BLOG_ALERTS;
    this._restClientService.getHtml(API_ENDPOINT).subscribe(res => {
      const parsedPosts: Array<any> = JSON.parse(res);
      parsedPosts.forEach(post => {
        post.link = `${SETTINGS.BLOG_BASE_URL}${post.link}`;
      });
      this.blogAlerts = parsedPosts;
    });
  }
}
