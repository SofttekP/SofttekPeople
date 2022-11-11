import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionReconocimientosComponent } from './administracion-reconocimientos.component';

describe('AdministracionReconocimientosComponent', () => {
  let component: AdministracionReconocimientosComponent;
  let fixture: ComponentFixture<AdministracionReconocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionReconocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionReconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
