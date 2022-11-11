import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPaisesComponent } from './administracion-paises.component';

describe('AdministracionPaisesComponent', () => {
  let component: AdministracionPaisesComponent;
  let fixture: ComponentFixture<AdministracionPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
