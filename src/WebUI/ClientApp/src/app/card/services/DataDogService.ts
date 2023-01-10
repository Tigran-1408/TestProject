import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Dog} from "../models/dogModel";
import {map} from "rxjs/operators";

@Injectable()
export class DataDogService {
  constructor(private http: HttpClient) {
  }

  Get(id: string) {
  }

  GetAll():Observable<Dog[]> {
    return this.http.get('assets/dog.json').pipe(map(
      (data:any)=>{
        let dogList = data['dogList'];
        return dogList.map((dog:any):Dog => new Dog(dog.title, dog.subtitle, dog.imageLink, dog.description));
      }
    ));
  }

  Create(data: any) {
  }

  Update(id: string) {
  }

  Delete(id: string) {
  }
}
