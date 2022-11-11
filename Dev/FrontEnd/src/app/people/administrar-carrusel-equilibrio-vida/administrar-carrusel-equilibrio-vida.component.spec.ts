import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCarruselEquilibrioVidaComponent } from './administrar-carrusel-equilibrio-vida.component';

describe('AdministarCarruselEquilibrioVidaComponent', () => {
  let component: AdministrarCarruselEquilibrioVidaComponent;
  let fixture: ComponentFixture<AdministrarCarruselEquilibrioVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarCarruselEquilibrioVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCarruselEquilibrioVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
