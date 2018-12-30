import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsComponent } from './project-details.component';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';

const fb = new FormBuilder();

xdescribe('ProjectDetailsComponent', () => {
  let component: ProjectDetailsComponent;
  let projectService: ProjectService;

  beforeEach(() => {
    projectService = new ProjectService(fb);
    component = new ProjectDetailsComponent(projectService);
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
