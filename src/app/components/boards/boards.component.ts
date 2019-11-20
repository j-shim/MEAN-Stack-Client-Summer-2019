import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SETTINGS } from 'src/app/settings';
import { Post } from 'src/app/_models/post';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  public posts: Post[];
  private allPosts: Post[];
  // tslint:disable-next-line:no-inferrable-types
  private _postsPerPage: number = 5; // should be const
  private _currentPage: number;

  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this._currentPage = 1;
    this.getAllPosts();
  }

  public getAllPosts(): void {
    this._restClientService.get<Post[]>(SETTINGS.BASE_URL + SETTINGS.API_POSTS)
      .subscribe(posts => {
        this.allPosts = posts;
        this.page(this._currentPage);
        console.log('getAllPosts Successful:', this.allPosts);
        this._alertService.alert(true, 'getAllPosts Successful');
      }, err => {
        console.error('Error on getAllPosts:', err);
        this._alertService.alert(false, `Error on getAllPosts: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
      });
  }

  public page(page: number): void {
    this._currentPage = page;
    this.posts = this.allPosts.slice((page - 1) * this._postsPerPage, page * this._postsPerPage);
  }
}
