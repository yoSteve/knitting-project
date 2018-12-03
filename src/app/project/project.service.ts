import { Injectable } from '@angular/core';
import { PROJECTS } from '@app/_data/project.data';
import { Project } from './project.type';
import { NEEDLE_SIZES } from '@app/_data/needle-sizes.data';
import { Defaults, LOPI_DEFAULTS } from '@app/_data/defaults-lopi.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  needles: any[] = NEEDLE_SIZES;

  constructor() {
  }

  getProject(id): Observable<Project> {
    let foundProject;
    PROJECTS.forEach(project => {
      if (project.id === id) { foundProject = project; }
    });
    return of(foundProject);
  }

  getDefaults(type): Observable<Defaults> {
    // switch (type) {
    //   case 'lopi':
    return of(LOPI_DEFAULTS);
    // }
  }

  getNeedles(): Observable<any[]> {
    return of(this.needles);
  }

} // end class
