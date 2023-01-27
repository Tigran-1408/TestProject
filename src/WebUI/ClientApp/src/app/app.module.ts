import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule,} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {TodoComponent} from './todo/todo.component';
import {TokenComponent} from './token/token.component';
import {ApiAuthorizationModule} from 'src/api-authorization/api-authorization.module';
import {AuthorizeInterceptor} from 'src/api-authorization/authorize.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HumanComponent} from "./human/human.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {CardModule} from './card/card.module';
import { CitiesComponent } from './cities/cities.component';
import {AngularMaterialModule} from "./angular-material.module";
import { CountriesComponent } from './countries/countries.component';
import { CityEditComponent } from './cities/city-edit/city-edit.component';
import { CountryEditComponent } from './countries/country-edit/country-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HumanComponent,
    CounterComponent,
    FetchDataComponent,
    TodoComponent,
    TokenComponent,
    CitiesComponent,
    CountriesComponent,
    CityEditComponent,
    CountryEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ApiAuthorizationModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatCardModule,
    CardModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
