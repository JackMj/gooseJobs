import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTipsComponent } from './cv-tips.component';

describe('CvTipsComponent', () => {
  let component: CvTipsComponent;
  let fixture: ComponentFixture<CvTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
