import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apartado3Component } from './apartado-3.component';

describe('Apartado3Component', () => {
  let component: Apartado3Component;
  let fixture: ComponentFixture<Apartado3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Apartado3Component]
    });
    fixture = TestBed.createComponent(Apartado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
