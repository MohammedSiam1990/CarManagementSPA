import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../shared/services/alertify.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginModel: any = {};
  // tslint:disable-next-line: no-inferrable-types
  dir: string = 'rtl';
  // @Output() toggleDirPublic = new EventEmitter<void>();
  isLogin = true;
  isLooding = true;
  constructor(private router: Router, private alertify: AlertifyService, public authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'rtl';
    console.log('start');
  }
  // tslint:disable-next-line: typedef
  async login() {
    this.isLooding = false;
    this.authService.login(this.loginModel).subscribe(next => {
      this.alertify.success('Logged in succssefully');
    },
    // tslint:disable-next-line: no-shadowed-variable
    error => {
      this.isLooding = true;
      this.alertify.error(error);
    },
    () => {
      // tslint:disable-next-line: no-debugger
      debugger;
      this.isLooding = true;
      this.router.navigate(['/carCardQuery']);
    });
    // tslint:disable-next-line: no-debugger
    // await this.delay(3000);
    // console.log(this.loginModel);
  }
  // tslint:disable-next-line: typedef
  toggleDir() {
    this.dir = this.dir === 'rtl' ? 'ltr' : 'rtl';
   }
  // tslint:disable-next-line: typedef
  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
   // tslint:disable-next-line: typedef
   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    return this.authService.loggedIn();
  }

  // tslint:disable-next-line: typedef
  isloodingFunction(isLooding) {

  }
}
