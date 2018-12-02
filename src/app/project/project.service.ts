import { Injectable } from '@angular/core';
import { PROJECTS } from '@app/_data/project.data';
import { Project } from './project.type';
import { NEEDLE_SIZES } from '@app/_data/needle-sizes.data';
import { Defaults, LOPI_DEFAULTS } from '@app/_data/defaults-lopi.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  needles: any[] = NEEDLE_SIZES;

  constructor() {
  }

  getProject(id): Promise<Project> {
    let foundProject;
    PROJECTS.forEach(project => {
      if (project.id === id) { foundProject = project; }
    });
    return Promise.resolve(foundProject);
  }

  getDefaults(type): Promise<Defaults> {
    // switch (type) {
    //   case 'lopi':
    return Promise.resolve(LOPI_DEFAULTS);
    // }
  }

  getNeedles() {
    return this.needles;
  }

} // end class
