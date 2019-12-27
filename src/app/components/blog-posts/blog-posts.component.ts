import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { SETTINGS } from 'src/app/settings';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  public blogPosts: Array<any> = [];
  constructor(
    private _restClientService: RestClientService
  ) { }

  ngOnInit() {
    this._init();
  }

  private _init(): void {
    const API_ENDPOINT: string = SETTINGS.BASE_URL + SETTINGS.API_BLOG_POSTS;
    this._restClientService.getHtml(API_ENDPOINT).subscribe(res => {
      const parsedPosts: Array<any> = JSON.parse(res);
      this.blogPosts = parsedPosts;
    });
  }

}
