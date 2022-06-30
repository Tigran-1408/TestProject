import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent implements OnInit {

  myForm : FormGroup;
  constructor(private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.initialForm();
  }
  submit(){
    debugger
    console.log( this.myForm)
  }
  initialForm(){
    this.myForm =  this.fb.group({
      "Firstname": new FormControl(),
      "Lastname": new FormControl(),
      "MiddleName": new FormControl(),
      "PassportNumber": new FormControl(),
      "SocialCardNumber": new FormControl(),
      "BirthDate": new FormControl(),
      "Gender": new FormControl(),
    });
  }

}
