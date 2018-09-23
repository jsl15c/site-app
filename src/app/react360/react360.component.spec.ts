import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { React360Component } from './react360.component';

describe('React360Component', () => {
  let component: React360Component;
  let fixture: ComponentFixture<React360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ React360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(React360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
