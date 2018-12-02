import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternInstructionsComponent } from './pattern-instructions.component';

describe('PatternInstructionsComponent', () => {
  let component: PatternInstructionsComponent;
  let fixture: ComponentFixture<PatternInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
