import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionContenidoComponent } from './administracion-contenido.component';

describe('AdministracionContenidoComponent', () => {
  let component: AdministracionContenidoComponent;
  let fixture: ComponentFixture<AdministracionContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
