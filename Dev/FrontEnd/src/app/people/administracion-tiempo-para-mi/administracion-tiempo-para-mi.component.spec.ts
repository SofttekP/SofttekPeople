import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionTiempoParaMiComponent } from './administracion-tiempo-para-mi.component';

describe('AdministracionContenidoComponent', () => {
  let component: AdministracionTiempoParaMiComponent;
  let fixture: ComponentFixture<AdministracionTiempoParaMiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionTiempoParaMiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionTiempoParaMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
