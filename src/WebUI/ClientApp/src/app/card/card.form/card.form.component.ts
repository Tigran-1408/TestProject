import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-form',
  templateUrl: './card.form.component.html',
  styleUrls: ['./card.form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardform: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.cardform = new FormGroup({
      "cardTitle": new FormControl('', [Validators.required]),
      "cardSubtitle": new FormControl('', [Validators.required]),
      "cardImg": new FormControl('', [Validators.required]),
      "cardContent": new FormControl('', [])
    })
  }

  submit(form: FormGroup): void {
    console.log(form);
  }

}
