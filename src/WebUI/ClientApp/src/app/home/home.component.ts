import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, NgModel, Validators} from "@angular/forms";
import { Subscription } from "rxjs";

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
export class HomeComponent implements OnDestroy{
  title: string = "";
  price: number = 0;
  company: string = "";
  form : FormGroup;
  protected _subs: Subscription = new Subscription();


  phone = new Phone("",0,"");
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];


  // constructor(){
  //   this.form = new FormGroup({
  //     "userName": new FormControl("Tom", Validators.required),
  //     "userEmail": new FormControl("", [
  //       Validators.required,
  //       Validators.email
  //     ]),
  //     "userPhone": new FormControl("", Validators.pattern("[0-9]{10}"))
  //   });
  // }

  //validation

  addPhone(title:NgModel, price: NgModel, comp: NgModel){
    console.log(title);
    console.log(price);
    console.log(comp);
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
  ngOnInit(){


  }



  onTitleChange(){
    if(this.phone.title=="нет")
      this.phone.title = "неизвестно";
  }




}
