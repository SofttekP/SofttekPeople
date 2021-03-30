import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEquilibrioDeVidaComponent } from './administracion-equilibrio-de-vida.component';

describe('AdministracionEquilibrioDeVidaComponent', () => {
  let component: AdministracionEquilibrioDeVidaComponent;
  let fixture: ComponentFixture<AdministracionEquilibrioDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionEquilibrioDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionEquilibrioDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
