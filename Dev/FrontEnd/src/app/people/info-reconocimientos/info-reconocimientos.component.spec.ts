import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReconocimientosComponent } from './info-reconocimientos.component';

describe('InfoReconocimientosComponent', () => {
  let component: InfoReconocimientosComponent;
  let fixture: ComponentFixture<InfoReconocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReconocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
