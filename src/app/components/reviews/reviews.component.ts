import { Component, OnInit } from '@angular/core';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { SETTINGS } from 'src/app/settings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviews = [];
  public reviewForm: FormGroup;
  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _formBuilder: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit() {
    this._init();
    this.reviewForm = this._formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    // stop here if form is invalid
    if (this.reviewForm.invalid) {
      this._alertService.alert(false, '후기 내용이 올바르지 않습니다.');
      return;
    }

    this._restClientService.post(SETTINGS.BASE_URL + SETTINGS.API_REVIEWS, this.reviewForm.value)
      .subscribe(resp => {
        this._alertService.alert(true, '작성이 성공적으로 완료 되었습니다. 5초 후에 자동으로 새로고침이 실행됩니다.');
        setTimeout(() => {
          location.reload();
        }, 5000);
      }, err => {
        console.error('Error on Review uploading:', err);
        this._alertService.alert(false, `문제가 발생하였습니다. 나중에 다시 시도하시기 바랍니다.`);
        // this._alertService.alert(false, `문제가 발생하였습니다. 나중에 다시 시도하시기 바랍니다.: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
      });

    this.reviewForm.reset();
  }

  private _init(): void {
    const API_ENDPOINT: string = SETTINGS.BASE_URL + SETTINGS.API_REVIEWS;
    this._restClientService.get(API_ENDPOINT).subscribe((res: Array<any>) => {
      this.reviews = res.reverse();
    }, err => {
      console.error(err);
    });
  }

}
