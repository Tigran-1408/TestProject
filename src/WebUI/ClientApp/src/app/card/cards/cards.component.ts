import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {DogClient, DogDto} from "../../web-api-client";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  dogs: DogDto[] = [];

  constructor(private dogClient: DogClient, private router: Router) {
  }

  ngOnInit(): void {
    this.onGetDogs();
  }

  onGetDogs(){
    this.dogClient.getAll().subscribe((data: DogDto[]) => this.dogs = data)
  }

  onDelete(id: string) {
    let isConfirm: boolean = confirm("Are you sure?")
    if (isConfirm) {
      this.dogClient.delete(id).subscribe((data: any) => {
        console.log(data)
      });
    }
  }

  onEdit(id:string) {
    this.router.navigate(["/card/cards-form"],{
      queryParams: {id: id}
    })
  }
}
