import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { SETTINGS } from 'src/app/settings';

@Component({
  selector: 'app-blog-alert',
  templateUrl: './blog-alert.component.html',
  styleUrls: ['./blog-alert.component.scss']
})
export class BlogAlertComponent implements OnInit {

  public blogAlerts = [];
  // tslint:disable-next-line:no-inferrable-types
  public isLoadingError: boolean = false;
  constructor(
    private _restClientService: RestClientService
  ) { }

  ngOnInit() {
    this._init();
  }

  public onRefreshClick(): void {
    this._init();
  }

  private _init(): void {
    const API_ENDPOINT: string = SETTINGS.BASE_URL + SETTINGS.API_BLOG_ALERTS;
    this._restClientService.getHtml(API_ENDPOINT).subscribe(res => {
      const parsedPosts = JSON.parse(res);
      for (let i = 0; i < parsedPosts.length; i++) { // IE11 support
        parsedPosts[i].link = `${SETTINGS.BLOG_BASE_URL}${parsedPosts[i].link}`;
      }
      this.blogAlerts = parsedPosts;
      this.isLoadingError = false;
    }, err => {
      console.error(err);
      this.isLoadingError = true;
    });
  }
}
