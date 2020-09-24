import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  baseurl = environment.apiUrl + 'Auth/';
  decodedToken: any;
  currentUser: User;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  login(model: any) {
    // tslint:disable-next-line: no-debugger
    debugger;
    // tslint:disable-next-line: no-debugger

    console.log(this.baseurl + 'login');
    return this.http.post(this.baseurl + 'login', model).pipe(
      map((response: any) => {
        // tslint:disable-next-line: no-debugger
        debugger;
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.currentUser = user.user;
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < user.token.length; i++) {
            this.decodedToken = this.jwtHelper.decodeToken(user.token[i]);
          }

          console.log(this.decodedToken);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef check Token
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
