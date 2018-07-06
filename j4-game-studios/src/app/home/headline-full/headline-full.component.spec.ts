import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineFullComponent } from './headline-full.component';

describe('HeadlineFullComponent', () => {
  let component: HeadlineFullComponent;
  let fixture: ComponentFixture<HeadlineFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
