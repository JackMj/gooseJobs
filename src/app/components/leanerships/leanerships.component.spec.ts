import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanershipsComponent } from './leanerships.component';

describe('LeanershipsComponent', () => {
  let component: LeanershipsComponent;
  let fixture: ComponentFixture<LeanershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
