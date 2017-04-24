import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTipsComponent } from './interview-tips.component';

describe('InterviewTipsComponent', () => {
  let component: InterviewTipsComponent;
  let fixture: ComponentFixture<InterviewTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
