import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';

@Component({
  selector: 'app-blog-alert',
  templateUrl: './blog-alert.component.html',
  styleUrls: ['./blog-alert.component.scss']
})
export class BlogAlertComponent implements OnInit {

  constructor(
    private _restClientService: RestClientService
  ) { }

  ngOnInit() {
    // this._init();
  }

  private _init(): void {
    const BLOG_URL: string = 'http://blog.naver.com/PostList.nhn?blogId=tourvancity&parentCategoryNo=16&skinType=&skinId=&from=menu';
    this._restClientService.getBlogPage(BLOG_URL).subscribe(doc => {
      console.log(doc);
    });
  }
}
