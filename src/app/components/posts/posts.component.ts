import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SETTINGS } from 'src/app/settings';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public post: Post;

  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const postId: string = this._route.snapshot.paramMap.get('pid');
    this.getPostById(postId);
  }

  public getPostById(id: string): void {
    this._restClientService.get<Post>(SETTINGS.BASE_URL + SETTINGS.API_POSTS + id)
      .subscribe(post => {
        this.post = post;
        console.log('getPostById Successful:', this.post);
        this._alertService.alert(true, 'getPostById Successful');
      }, err => {
        console.error('Error on getPostById:', err);
        this._alertService.alert(false, `Error on getPostById: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
      });
  }

}
