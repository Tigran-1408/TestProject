import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card.FormComponent } from './card.form.component';

describe('Card.FormComponent', () => {
  let component: Card.FormComponent;
  let fixture: ComponentFixture<Card.FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card.FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Card.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
