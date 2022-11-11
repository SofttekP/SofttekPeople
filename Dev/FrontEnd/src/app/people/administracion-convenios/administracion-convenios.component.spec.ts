import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionConveniosComponent } from './administracion-convenios.component';

describe('AdministracionConveniosComponent', () => {
  let component: AdministracionConveniosComponent;
  let fixture: ComponentFixture<AdministracionConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
