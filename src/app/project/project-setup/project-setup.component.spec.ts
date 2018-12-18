import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSetupComponent } from './project-setup.component';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';

const fb = new FormBuilder();

xdescribe('ProjectSetupComponent', () => {
  let component: ProjectSetupComponent;
  let projectService: ProjectService;

  beforeEach(() => {
    projectService = new ProjectService(fb);
    component = new ProjectSetupComponent(projectService);
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
