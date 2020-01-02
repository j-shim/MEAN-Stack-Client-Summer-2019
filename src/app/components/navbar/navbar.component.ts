import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  public toggle(id: string): void {
    const elem: HTMLElement = document.getElementById(id);
    elem.classList.toggle('toggled');
  }
  public test(eventBinding: string, event: any, id: string): void {
    console.log(`Event binding: ${eventBinding}`);
    console.log(event);
    console.log(event.type);
    // alert(`Testing:
    //         Event binding: ${eventBinding},
    //         Event fired: ${event},
    //         Event type: ${event.type}`);
    if (eventBinding === 'click1') {
      document.getElementById(id)['style']['display'] = 'none !important';
    }
    else if (eventBinding === 'click2') {
      setTimeout(() => {
        document.getElementById(id)['style']['display'] = 'none !important';
      }, 1000);
    }
    const toggler = document.querySelector('.navbar-toggler');
    toggler['checked'] = false;
  }
}
