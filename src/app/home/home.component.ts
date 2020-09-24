import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../shared/models/user';
import { AuthService } from '../auth/auth.service';
import { AlertifyService } from '../shared/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dir = 'rtl';
  user: User;
  constructor(public translate: TranslateService,  public authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) {
    // tslint:disable-next-line: no-debugger
    debugger;
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/ar|en/) ? browserLang : 'ar');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'ar') {
        this.dir = 'rtl';
        localStorage.setItem('dir', 'ar');
      } else {
        this.dir = 'ltr';
        localStorage.setItem('dir', 'en');
      }
    }); }
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.authService.decodedToken = null;
    this.alertify.message('logged out');
    this.router.navigate(['/auth']);
  }

}
