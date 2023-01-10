import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {CardFormComponent} from "./card.form/card.form.component";
import {CardsComponent} from "./cards/cards.component";
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {DataDogService} from "./services/DataDogService";


@NgModule({
  declarations: [
    CardComponent,
    CardFormComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  exports: [CardComponent],
  providers: [DataDogService]
})
export class CardModule {
}
