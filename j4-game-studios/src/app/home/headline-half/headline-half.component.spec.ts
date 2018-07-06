import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineHalfComponent } from './headline-half.component';

describe('HeadlineHalfComponent', () => {
  let component: HeadlineHalfComponent;
  let fixture: ComponentFixture<HeadlineHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
