import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfacionComponent } from './satisfacion.component';

describe('SatisfacionComponent', () => {
  let component: SatisfacionComponent;
  let fixture: ComponentFixture<SatisfacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
