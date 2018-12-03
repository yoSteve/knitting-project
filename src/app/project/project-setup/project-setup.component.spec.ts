import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSetupComponent } from './project-setup.component';
import { FormBuilder } from '@angular/forms';

xdescribe('ProjectSetupComponent', () => {
  let component: ProjectSetupComponent;

  beforeEach(aysnc () => {
    component = new ProjectSetupComponent(new FormBuilder());
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
