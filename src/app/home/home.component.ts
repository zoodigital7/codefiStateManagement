import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User
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

  logout() {
    this.userService.logout()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
