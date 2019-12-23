import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  public htmlString: string;
  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const pageId: string = this._route.snapshot.paramMap.get('id');
    // this._alertService.alert(true, pageId);
    this._restClientService.getHtml(`assets/static/${pageId}.html`).subscribe((res: string) => {
      this.htmlString = res;
    });
  }

}
