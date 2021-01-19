import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoParaMiComponent } from './tiempo-para-mi.component';

describe('TiempoParaMiComponent', () => {
  let component: TiempoParaMiComponent;
  let fixture: ComponentFixture<TiempoParaMiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoParaMiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoParaMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
