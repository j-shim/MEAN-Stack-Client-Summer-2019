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

  ngOnInit() {
    this._setMapHoverTransition();
    this._setPathTransition();
  }

  private _setMapHoverTransition(): void {
    const mapElem = document.querySelectorAll('.province');
    // Use for loop for IE browser support
    for (let i = 0; i < mapElem.length; i++) {
      console.log(mapElem);
      debugger;
      console.log(mapElem[i]);
      if (mapElem[i].getAttribute('class').indexOf(prov[0][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          console.log('test 4');
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[0][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[0][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      } else if (mapElem[i].getAttribute('class').indexOf(prov[1][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[1][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[1][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      } else if (mapElem[i].getAttribute('class').indexOf(prov[2][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[2][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[2][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      } else if (mapElem[i].getAttribute('class').indexOf(prov[3][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[3][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[3][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      } else if (mapElem[i].getAttribute('class').indexOf(prov[4][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[4][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[4][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      } else if (mapElem[i].getAttribute('class').indexOf(prov[5][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[5][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[5][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      } else if (mapElem[i].getAttribute('class').indexOf(prov[6][0]) > -1) {
        mapElem[i].addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[6][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = '#c75a4e';
            mapProvinceElem[j]['style']['transform'] = 'translate(-1px, -1px)';
          }
        });
        mapElem[i].addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[6][0]}`);
          for (let j = 0; j < mapProvinceElem.length; j++) {
            mapProvinceElem[j]['style']['fill'] = 'url(#grad1)';
            mapProvinceElem[j]['style']['transform'] = 'none';
          }
        });
      }
    }
  }

  private _setPathTransition(): void { // ignore all the errors, it's working
    console.log('test 5');
    const provinceElem = document.getElementsByClassName('province');
    console.log('test 6');
    // Use for loop for IE browser support
    for (let i = 0; i < provinceElem.length; i++) {
      console.log('test 7');
      if (provinceElem[i].getAttribute('class').indexOf(prov[0][0]) > -1) {
        console.log('test 8');
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
      } else if (provinceElem[i].getAttribute('class').indexOf(prov[1][0]) > -1) {
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
      } else if (provinceElem[i].getAttribute('class').indexOf(prov[2][0]) > -1) {
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
      } else if (provinceElem[i].getAttribute('class').indexOf(prov[3][0]) > -1) {
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
      } else if (provinceElem[i].getAttribute('class').indexOf(prov[4][0]) > -1) {
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
      } else if (provinceElem[i].getAttribute('class').indexOf(prov[5][0]) > -1) {
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
      } else if (provinceElem[i].getAttribute('class').indexOf(prov[6][0]) > -1) {
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
