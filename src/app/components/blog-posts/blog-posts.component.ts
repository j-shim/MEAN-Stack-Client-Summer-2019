import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { SETTINGS } from 'src/app/settings';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  public blogPosts = [];
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
    const API_ENDPOINT: string = SETTINGS.BASE_URL + SETTINGS.API_BLOG_POSTS;
    console.log('test 1');
    this._restClientService.getHtml(API_ENDPOINT).subscribe(res => {
    console.log('test 2');
    const parsedPosts = JSON.parse(res);
    console.log('test 3');
    this.blogPosts = parsedPosts;
      this.isLoadingError = false;
    }, err => {
      console.error(err);
      this.isLoadingError = true;
    });
  }
}
