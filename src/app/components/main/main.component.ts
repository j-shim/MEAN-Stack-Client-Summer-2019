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
    mapElem.forEach(mapElemItem => {
      if (mapElemItem.getAttribute('class').indexOf(prov[0][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[0][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[0][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      } else if (mapElemItem.getAttribute('class').indexOf(prov[1][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[1][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[1][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      } else if (mapElemItem.getAttribute('class').indexOf(prov[2][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[2][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[2][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      } else if (mapElemItem.getAttribute('class').indexOf(prov[3][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[3][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[3][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      } else if (mapElemItem.getAttribute('class').indexOf(prov[4][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[4][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[4][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      } else if (mapElemItem.getAttribute('class').indexOf(prov[5][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[5][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[5][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      } else if (mapElemItem.getAttribute('class').indexOf(prov[6][0]) > -1) {
        mapElemItem.addEventListener('mouseover', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[6][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:#c75a4e;transform:translate(-3px, -3px);');
          });
        });
        mapElemItem.addEventListener('mouseout', () => {
          const mapProvinceElem = document.querySelectorAll(`path.province.${prov[6][0]}`);
          mapProvinceElem.forEach(mapProvinceElemItem => {
            mapProvinceElemItem.setAttribute('style', 'fill:url(#grad1);transform:none;');
          });
        });
      }
    });
  }

  private _setPathTransition(): void { // ignore all the errors, it's working
    const provinceElem = document.querySelectorAll('.province');
    // Use for loop for IE browser support
    provinceElem.forEach(provinceElemItem => {
      if (provinceElemItem.getAttribute('class').indexOf(prov[0][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[0][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[0][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[0][2]};`);
          });
        });
      } else if (provinceElemItem.getAttribute('class').indexOf(prov[1][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[1][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[1][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[1][2]};`);
          });
        });
      } else if (provinceElemItem.getAttribute('class').indexOf(prov[2][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[2][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[2][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[2][2]};`);
          });
        });
      } else if (provinceElemItem.getAttribute('class').indexOf(prov[3][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[3][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[3][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[3][2]};`);
          });
        });
      } else if (provinceElemItem.getAttribute('class').indexOf(prov[4][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[4][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[4][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[4][2]};`);
          });
        });
      } else if (provinceElemItem.getAttribute('class').indexOf(prov[5][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[5][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[5][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[5][2]};`);
          });
        });
      } else if (provinceElemItem.getAttribute('class').indexOf(prov[6][0]) > -1) {
        provinceElemItem.addEventListener('mouseover', () => {
          const pathElem = document.querySelectorAll(`.${prov[6][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', 'transition:stroke-dashoffset 2.5s ease;stroke-dashoffset:0;');
          });
        });
        provinceElemItem.addEventListener('mouseout', () => {
          const pathElem = document.querySelectorAll(`.${prov[6][1]}`);
          pathElem.forEach(pathElemItem => {
            pathElemItem.setAttribute('style', `transition:none;stroke-dashoffset:${prov[6][2]};`);
          });
        });
      }
    });
  }

}
