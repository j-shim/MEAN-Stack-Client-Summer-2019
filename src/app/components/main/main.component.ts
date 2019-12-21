import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

// [Province, Capital, stroke-dashoffset] (Refer to .scss comments)
const prov = [['bc', 'victoria', '196'],
              ['ab', 'edmonton', '169'],
              ['sk', 'regina', '137'],
              ['mb', 'winnipeg', '111'],
              ['on', 'ottawa', '160'],
              ['qc', 'montreal', '164'],
              ['ns', 'halifax', '196']];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() { // ignore all the errors, it's working
    const provinceElem = document.getElementsByClassName('province');
    for (let i = 0; i < provinceElem.length; i++) {
      if (provinceElem[i].classList.value.includes(prov[0][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[0][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[0][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[0][2];
          }
        });
      } else if (provinceElem[i].classList.value.includes(prov[1][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[1][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[1][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[1][2];
          }
        });
      } else if (provinceElem[i].classList.value.includes(prov[2][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[2][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[2][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[2][2];
          }
        });
      } else if (provinceElem[i].classList.value.includes(prov[3][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[3][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[3][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[3][2];
          }
        });
      } else if (provinceElem[i].classList.value.includes(prov[4][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[4][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[4][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[4][2];
          }
        });
      } else if (provinceElem[i].classList.value.includes(prov[5][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[5][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[5][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[5][2];
          }
        });
      } else if (provinceElem[i].classList.value.includes(prov[6][0])) {
        provinceElem[i].addEventListener('mouseover', () => {
          const pathElem = document.getElementsByClassName(prov[6][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'stroke-dashoffset 2.5s ease';
            pathElem[j]['style']['stroke-dashoffset'] = '0';
          }
        });
        provinceElem[i].addEventListener('mouseout', () => {
          const pathElem = document.getElementsByClassName(prov[6][1]);
          for (let j = 0; j < pathElem.length; j++) {
            pathElem[j]['style']['transition'] = 'none';
            pathElem[j]['style']['stroke-dashoffset'] = prov[6][2];
          }
        });
      }
    }
  }

}
