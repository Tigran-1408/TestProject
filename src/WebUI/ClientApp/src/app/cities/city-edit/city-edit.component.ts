import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../models/city";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {Country} from '../../countries/models/country';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {BaseFormComponent} from "../../base.form.component";
import {CityService} from '../services/city.service';
import {ApiResult} from "../../base.service";

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.scss']
})
export class CityEditComponent extends BaseFormComponent implements OnInit {
  title: string;
  form: FormGroup;
  city: City;
  id?: number;
  countries: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cityService: CityService
  ) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lat: new FormControl('', [
        Validators.required,
        Validators.pattern('^[-]?[0-9]+(\.[0-9]{1,4})?$')
      ]),
      lon: new FormControl('', [
        Validators.required,
        Validators.pattern('^[-]?[0-9]+(\.[0-9]{1,4})?$')
      ]),
      countryId: new FormControl('', [Validators.required])
    }, null, this.isDupeCity());

    this.loadData();
  }

  isDupeCity(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      let city = <City>{};
      city.id = (this.id) ? this.id : 0;
      city.name = this.form.get("name").value;
      city.lat = +this.form.get("lat").value;
      city.lon = +this.form.get("lon").value;
      city.countryId = +this.form.get("countryId").value;

      return this.cityService.isDupeCity(city)
        .pipe(map(result => {
          return (result ? {isDupeCity: true} : null);
        }))
    }
  }

  loadData() {
    this.loadCountries();

    //var id;
    //this.activatedRoute.params.subscribe(params => {id = params['id'];})
    this.id = +this.activatedRoute.snapshot.params.id;

    if (this.id) {
      this.cityService.get<City>(this.id).subscribe(result => {
        this.city = result;
        this.title = "Edit - " + this.city.name;

        this.form.patchValue(this.city);
      }, error => console.error(error));
    } else {
      this.title = "Create a new City";
    }
  }

  loadCountries() {
    this.cityService.getCountries<ApiResult<Country>>(
      0,
      9999,
      "Name",
      null,
      null,
      null
    ).subscribe(result => {
      this.countries = result.data;
    }, error => console.error(error));
  }

  onSubmit() {
    let city = this.id ? this.city : <City>{};
    city.name = this.form.get("name").value;
    city.lat = +this.form.get("lat").value;
    city.lon = +this.form.get("lon").value;
    city.countryId = +this.form.get("countryId").value;

    if (this.id) {
      this.cityService.put<City>(city)
        .subscribe(result => {
            console.log("City " + city.id + " has been update.");
            this.router.navigate(['/cities']);
          },
          error => console.error(error))
    } else {
      this.cityService.post<City>(city)
        .subscribe(result => {
          console.log("City " + result.id + " has been created.");
          this.router.navigate(['/cities']);
        }, error => console.error(error))
    }
  }
}
