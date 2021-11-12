import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  currentUser: User
  showSideNav = false
  private subs = new Subscription()
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.subToCurrentUser()
  }

  subToCurrentUser() {
    this.userService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user
      } else {
        this.currentUser = null
      }
    })
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav
  }

  logout() {
    this.userService.logout()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
