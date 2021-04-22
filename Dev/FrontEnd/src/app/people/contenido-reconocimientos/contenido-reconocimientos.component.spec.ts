import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoReconocimientosComponent } from './contenido-reconocimientos.component';

describe('ContenidoReconocimientosComponent', () => {
  let component: ContenidoReconocimientosComponent;
  let fixture: ComponentFixture<ContenidoReconocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoReconocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoReconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
