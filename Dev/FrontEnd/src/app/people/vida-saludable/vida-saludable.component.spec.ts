import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaSaludableComponent } from './vida-saludable.component';

describe('VidaSaludableComponent', () => {
  let component: VidaSaludableComponent;
  let fixture: ComponentFixture<VidaSaludableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidaSaludableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidaSaludableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
