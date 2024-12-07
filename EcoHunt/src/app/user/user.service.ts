import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }
  constructor() { 
    try {
      const isUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(isUser);
    } catch (error) {
      this.user = null
    }
   }

   login() {
    this.user = {
      username: 'lazo',
      email: 'sadface@fawda.gasfd',
      password: 'zxczxc',
      id: 'asdwwwq'
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
   }

   logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
   }
}
