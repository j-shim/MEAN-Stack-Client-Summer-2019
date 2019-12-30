import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestClientService } from 'src/app/services/rest-client/rest-client.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SETTINGS } from 'src/app/settings';
import { InquiryService } from 'src/app/services/inquiry/inquiry.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {
  public inquiryForm: FormGroup;

  constructor(
    private _restClientService: RestClientService,
    private _alertService: AlertService,
    private _inquiryService: InquiryService,
    private _formBuilder: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit() {
    this.inquiryForm = this._formBuilder.group({
      inquiryType: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      departureYear: ['', Validators.required],
      departureMonth: ['', Validators.required],
      visitOrCall: ['', Validators.required],
      date: ['', Validators.required],
      body: ['', [Validators.required, Validators.maxLength(400)]]
    });
  }

  public onSubmit(): void {
    // stop here if form is invalid
    if (this.inquiryForm.invalid) {
      this._alertService.alert(false, '문의 내용이 올바르지 않습니다.');
      return;
    }
    if (this._inquiryService.isTooEarlyToSubmitAgain(Date.now())) {
      this._alertService.alert(false, '하루에 한번만 신청 가능합니다.');
      return;
    }

    const htmlString: string = this._toHtmlString(this.inquiryForm.value);

    this._restClientService.post(SETTINGS.BASE_URL + SETTINGS.API_MAILER, { htmlString })
      .subscribe(resp => {
        this._alertService.alert(true, '신청이 성공적으로 완료 되었습니다.');
        this._router.navigate(['/']);
      }, err => {
        console.error('Error on Inquiry:', err);
        this._alertService.alert(false, `문제가 발생하였습니다. 나중에 다시 시도하시기 바랍니다.`);
        // this._alertService.alert(false, `문제가 발생하였습니다. 나중에 다시 시도하시기 바랍니다.: ${typeof err === 'string' ? err : JSON.stringify(err)}`);
      });

    this.inquiryForm.reset();
  }

  private _toHtmlString(form): string {
    const htmlString = `
      <h1>문의하기</h1>
      <h2>상담유형</h2>
      <p>${form.inquiryType}</p>
      <h2>이름</h2>
      <p>${form.name}</p>
      <h2>이메일</h2>
      <p>${form.email}</p>
      <h2>연락처</h2>
      <p>${form.tel}</p>
      <h2>출국 희망시기</h2>
      <p>${form.departureYear}년 ${form.departureMonth}월</p>
      <h2>방문/전화</h2>
      <p>${form.visitOrCall}</p>
      <h2>상담희망일자</h2>
      <p>${form.date}</p>
      <h2>문의내용</h2>
      <p>${form.body.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
    `;
    // https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-tags

    return htmlString;
  }
}
