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
  public onLinkClick(): void {
    const toggler = document.querySelector('.navbar-toggler');
    toggler['checked'] = false;
  }
}
