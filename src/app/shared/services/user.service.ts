import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { MockUsers } from '../static-models/mock-users';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockUsers = MockUsers
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>
  constructor(
    private router: Router,
    private storage: LocalStorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(this.storage.getItem('currentUser'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  setCurrentUser(user: User) {
    this.currentUserSubject.next(user)
  }

  login(params):Observable<User> {
    const found = this.mockUsers.find(x => x.email === params.email && x.password === params.password)
    if (found) {
      const newUser = new User(found)
      const token = Math.random().toString(36).slice(2)
      this.storage.setItem('accessToken', token)
      this.storage.setItem('currentUser', newUser)
      this.currentUserSubject.next(newUser)
      return new BehaviorSubject(newUser)
    } else {
      let err = { msg: 'User Not Found!', status: 404 }
      return throwError(err)
    }
  }

  logout() {
    this.removeCurrentUserAndRoute()
  }

  removeCurrentUserAndRoute() {
    this.storage.setItem('currentUser', undefined)
    this.storage.setItem('accessToken', undefined)
    this.storage.removeItem('currentUser')
    this.storage.removeItem('accessToken')
    this.currentUserSubject.next(null)
    this.router.navigate(['/login', { success: true }])
  }
}
