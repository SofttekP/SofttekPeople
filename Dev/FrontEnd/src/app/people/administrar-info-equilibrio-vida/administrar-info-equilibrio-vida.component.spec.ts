import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarInfoEquilibrioVidaComponent } from './administrar-info-equilibrio-vida.component';

describe('AdministarInfoEquilibrioVidaComponent', () => {
  let component: AdministrarInfoEquilibrioVidaComponent;
  let fixture: ComponentFixture<AdministrarInfoEquilibrioVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarInfoEquilibrioVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarInfoEquilibrioVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
