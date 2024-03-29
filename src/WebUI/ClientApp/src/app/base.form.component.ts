﻿import {Component} from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  template: ''
})
export class BaseFormComponent {
  form: FormGroup;

  constructor() {}

  // retrieve a FormControl
  getControl(name: string) {
    return this.form.get(name);
  }

  // returns true if the FormControl is valid
  isValid(name: string) {
    let e = this.getControl(name);
    return e && e.valid;
  }

  // returns true if the FormControl has been changed
  isChanged(name: string) {
    let e = this.getControl(name);
    return e && (e.dirty || e.touched);
  }

  // returns TRUE if the FormControl is raising an error,
  // i.e. an invalid state after user changes
  hasError(name: string) {
    let e = this.getControl(name);
    return e && (e.dirty || e.touched) && e.invalid;
  }
}
