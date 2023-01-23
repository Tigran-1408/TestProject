import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TodoComponent } from './todo/todo.component';
import { TokenComponent } from './token/token.component';
import {HumanComponent} from "./human/human.component";
import {CardComponent} from "./card/card.component";
import {CardsComponent} from "./card/cards/cards.component";
import {CardFormComponent} from "./card/card.form/card.form.component";
import {CitiesComponent} from "./cities/cities.component";
import {CountriesComponent} from "./countries/countries.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'card', component: CardComponent, children: [
      { path: 'cards', component: CardsComponent},
      { path: 'cards-form', component: CardFormComponent}
    ]},
  { path: 'HumanComponent', component: HumanComponent},
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'todo', component: TodoComponent, canActivate: [AuthorizeGuard] },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] },
  { path: 'cities', component: CitiesComponent },
  { path: 'countries', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
