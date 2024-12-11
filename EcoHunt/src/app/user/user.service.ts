import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/ecohunt/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post('/ecohunt/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
  }

  register(
    email: string,
    username: string,
    password: string,
    rePassword: string,
    placeOfLiving: string,
    hobbies: string,
    tools: string
  ) {
    return this.http
      .post<UserForAuth>('/ecohunt/register', {
        email,
        username,
        password,
        rePassword,
        placeOfLiving,
        hobbies,
        tools,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getUser() {
    return this.http
      .get<UserForAuth>('/ecohunt/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }
}
