import { Component } from '@angular/core';
import {NgModel} from "@angular/forms";

export class Phone{
  constructor(public title: string,
              public price: number,
              public company: string)
  { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title: string = "";
  price: number = 0;
  company: string = "";

  phone = new Phone("",0,"");
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  addPhone(title:NgModel, price: NgModel, comp: NgModel){
    console.log(title);
    console.log(price);
    console.log(comp);
  }

  onTitleChange(){
    if(this.phone.title=="нет")
      this.phone.title = "неизвестно";
  }
}
