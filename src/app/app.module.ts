import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { BootstrapModule } from './shared/bootstrap/bootstrap.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TestappComponent } from './test/testapp/testapp.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarCardQueryComponent } from './carCard/carCard-query/carCard-query.component';
import { CarCardCreateComponent } from './carCard/carCard-create/carCard-create.component';
import { CarCardEditComponent } from './carCard/carCard-edit/carCard-edit.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AlertifyService } from './shared/services/alertify.service';
import { AuthService } from './auth/auth.service';
import { DefinitionScreensComponent } from './definition-screens/definition-screens.component';


// tslint:disable-next-line: typedef
export function tokenGetter() {
  return localStorage.getItem('token');
}
// tslint:disable-next-line: typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
      AuthComponent,
      HomeComponent,
      TestappComponent,
      CarCardQueryComponent,
      CarCardCreateComponent,
      CarCardEditComponent,
      DefinitionScreensComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient]
      }
   }),
   JwtModule.forRoot({
    config: {
      tokenGetter ,
      allowedDomains: ['localhost:50251'],
      disallowedRoutes: ['localhost:50251/api/auth']
    }
  })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
