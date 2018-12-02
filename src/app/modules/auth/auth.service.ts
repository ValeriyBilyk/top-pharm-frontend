import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  userData = this.getUserData('userData');

  constructor(private http: HttpClient) { }

  signIn({body, params = {filters: {}}}) {

    return this.http.post(`http://localhost:3100/api/v1/auth/sign-in`, body, {params: params.filters})
      .pipe(map((response) => {
        this.saveUserData('userData', response);
        this.userData = response;
        return response;
      }));
  }

  signUp({body, params = {filters: {}}}) {

    return this.http.post(`http://localhost:3100/api/v1/auth/sign-up`, body, {params: params.filters}).pipe();
  }

  saveUserData(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  getUserData(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
