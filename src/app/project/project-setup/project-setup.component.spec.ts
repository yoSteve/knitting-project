import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSetupComponent } from './project-setup.component';

describe('ProjectSetupComponent', () => {
  let component: ProjectSetupComponent;
  let fixture: ComponentFixture<ProjectSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
