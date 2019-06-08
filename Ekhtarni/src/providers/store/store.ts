import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {
  state$ = new Subject();
  constructor(public http: HttpClient) {
    console.log('Hello StoreProvider Provider');
  }

  setUser(id) {
    localStorage.setItem('user', id);
  }

  emitState() {
    this.state$.next();
  }

  stateSubscription() {
    return this.state$.asObservable();
  }



  getUserId() {
    return localStorage.getItem('user');
  }


  setUserData({ name, image }) {
    let userData = JSON.stringify({ name, image });
    localStorage.setItem('userData', userData);
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('userData'))
  }


}
