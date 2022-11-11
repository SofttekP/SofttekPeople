import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionBeneficiosComponent } from './administracion-beneficios.component';

describe('AdministracionBeneficiosComponent', () => {
  let component: AdministracionBeneficiosComponent;
  let fixture: ComponentFixture<AdministracionBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
