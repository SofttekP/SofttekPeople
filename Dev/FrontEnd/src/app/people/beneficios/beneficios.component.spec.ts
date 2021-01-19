import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraFelicidadComponent } from './beneficios.component';

describe('NuestraFelicidadComponent', () => {
  let component: NuestraFelicidadComponent;
  let fixture: ComponentFixture<NuestraFelicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestraFelicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraFelicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
