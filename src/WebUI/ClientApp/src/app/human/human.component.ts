import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.scss']
})
export class HumanComponent implements OnInit {

  myForm : FormGroup = new FormGroup({
    "Firstname": new FormControl(),
    "Lastname": new FormControl(),
    "MiddleName": new FormControl(),
    "PassportNumber": new FormControl(),
    "SocialCardNumber": new FormControl(),
    "BirthDate": new FormControl(),
    "Gender": new FormControl(),
  });
  constructor() {

  }

  ngOnInit(): void {

  }

}
