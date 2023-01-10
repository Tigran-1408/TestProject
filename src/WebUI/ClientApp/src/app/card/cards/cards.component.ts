import {Component, OnInit} from '@angular/core';
import {DataDogService} from "../services/DataDogService";
import {Dog} from "../models/dogModel";
import {DogClient, DogDto} from "../../web-api-client";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  dogs: DogDto[] = [];

  constructor(private dogClient: DogClient) {
  }

  ngOnInit(): void {
    this.dogClient.getAll().subscribe((data: DogDto[]) => this.dogs = data)
  }

}
