import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfaccionCommentComponent } from './satisfaccion-comment.component';

describe('SatisfaccionCommentComponent', () => {
  let component: SatisfaccionCommentComponent;
  let fixture: ComponentFixture<SatisfaccionCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfaccionCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfaccionCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
