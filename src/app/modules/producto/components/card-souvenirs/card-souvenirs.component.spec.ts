import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSouvenirsComponent } from './card-souvenirs.component';

describe('CardSouvenirsComponent', () => {
  let component: CardSouvenirsComponent;
  let fixture: ComponentFixture<CardSouvenirsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSouvenirsComponent]
    });
    fixture = TestBed.createComponent(CardSouvenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
