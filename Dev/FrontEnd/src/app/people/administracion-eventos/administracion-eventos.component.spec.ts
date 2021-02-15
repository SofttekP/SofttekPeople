import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEventosComponent } from './administracion-eventos.component';

describe('AdministracionEventosComponent', () => {
  let component: AdministracionEventosComponent;
  let fixture: ComponentFixture<AdministracionEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
