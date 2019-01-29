import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormComponent } from './details-form.component';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from '../../project.service';

const fb = new FormBuilder();

// xdescribe('DetailsFormComponent', () => {
//   let component: DetailsFormComponent;
//   let projectService: ProjectService;

//   beforeEach(() => {
//     projectService = new ProjectService(fb);
//     component = new DetailsFormComponent(projectService);
//   });

//   afterEach(() => {
//     component = null;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
