import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionContenidoInsigniasComponent } from './administracion-contenido-insignias.component';

describe('AdministracionContenidoInsigniasComponent', () => {
  let component: AdministracionContenidoInsigniasComponent;
  let fixture: ComponentFixture<AdministracionContenidoInsigniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionContenidoInsigniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionContenidoInsigniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
