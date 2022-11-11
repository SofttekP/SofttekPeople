import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionContenidoReconocimientosComponent } from './administracion-contenido-reconocimientos.component';

describe('AdministracionContenidoReconocimientosComponent', () => {
  let component: AdministracionContenidoReconocimientosComponent;
  let fixture: ComponentFixture<AdministracionContenidoReconocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionContenidoReconocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionContenidoReconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
