import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apartado2Component } from './apartado-2.component';

describe('Apartado2Component', () => {
  let component: Apartado2Component;
  let fixture: ComponentFixture<Apartado2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Apartado2Component]
    });
    fixture = TestBed.createComponent(Apartado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
