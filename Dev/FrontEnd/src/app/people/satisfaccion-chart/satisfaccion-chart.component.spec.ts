import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfaccionChartComponent } from './satisfaccion-chart.component';

describe('SatisfaccionChartComponent', () => {
  let component: SatisfaccionChartComponent;
  let fixture: ComponentFixture<SatisfaccionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfaccionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfaccionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
