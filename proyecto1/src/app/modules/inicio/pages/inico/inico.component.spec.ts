import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicoComponent } from './inico.component';

describe('InicoComponent', () => {
  let component: InicoComponent;
  let fixture: ComponentFixture<InicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicoComponent]
    });
    fixture = TestBed.createComponent(InicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
