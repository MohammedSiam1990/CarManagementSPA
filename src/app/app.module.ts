import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      CarCardEditComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
