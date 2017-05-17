import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPostsComponent } from './fb-posts.component';

describe('FbPostsComponent', () => {
  let component: FbPostsComponent;
  let fixture: ComponentFixture<FbPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
