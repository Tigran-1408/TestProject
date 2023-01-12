import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateDogCommand, DogClient, DogDto, UpdateDogCommand} from "../../web-api-client";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-card-form',
  templateUrl: './card.form.component.html',
  styleUrls: ['./card.form.component.scss']
})
export class CardFormComponent implements OnInit {

  cardform: FormGroup;
  isDone: boolean = false;
  dog: DogDto = new DogDto();

  initialForm() {
    this.cardform = new FormGroup({
      cardId: new FormControl(),
      cardTitle: new FormControl('', [Validators.required]),
      cardSubtitle: new FormControl('', [Validators.required]),
      cardImg: new FormControl('', [Validators.required]),
      cardContent: new FormControl('', [])
    })
  }

  submit(form: FormGroup): void {
    const card = {
      id: form.controls['cardId'].value,
      name: form.controls['cardTitle'].value,
      breed: form.controls['cardSubtitle'].value,
      image: form.controls['cardImg'].value,
      description: form.controls['cardContent'].value
    } as DogDto

    if (card.id != undefined || card.id != null) {
      this.dogClient.update(card as UpdateDogCommand).subscribe();
      this.initialForm();
    } else {
      console.log(card)
      this.dogClient.create(card as CreateDogCommand).subscribe((data: any) => {
        console.log(data)
      });
    }
  }


  getIdFromRoute(): string | null {
    let id: string;
    this.router.queryParams.subscribe(params => {
      id = params.id;
    });
    if (id !== null) {
      this.isDone = true;
      return id;
    }
    return null;
  };

  getDogById(id: string) {
    return this.dogClient.getById(id).pipe(tap((data: DogDto) => {
      this.dog.id = data.id;
      this.dog.name = data.name;
      this.dog.breed = data.breed;
      this.dog.image = data.image;
      this.dog.description = data.description;
    }));
  }

  constructor(private dogClient: DogClient, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initialForm();

    let idString: string | null = this.getIdFromRoute();
    if (idString) {
      this.getDogById(idString).pipe(tap(() => {
        if (this.dog != null || this.dog != undefined) {
          this.cardform.controls['cardId'].setValue(this.dog?.id);
          this.cardform.controls['cardTitle'].setValue(this.dog?.name);
          this.cardform.controls['cardSubtitle'].setValue(this.dog?.breed);
          this.cardform.controls['cardImg'].setValue(this.dog?.image);
          this.cardform.controls['cardContent'].setValue(this.dog?.description);
        }
      })).subscribe();

      idString = null;
    }
  }
}
