import { Injectable } from '@angular/core';
import { PROJECTS } from '@app/_data/project.data';
import { Project } from './project.type';
import { NEEDLE_SIZES } from '@app/_data/needle-sizes.data';
import { Defaults, LOPI_DEFAULTS } from '@app/_data/defaults-lopi.data';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = PROJECTS;
  needles: any[] = NEEDLE_SIZES;

  constructor(private fb: FormBuilder) {
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

  buildProjectForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      isMetric: [true],
      guage: this.fb.group({
        customGuage: [false],
        needles: ['', Validators.required], // array
        width: ['', Validators.required],
        height: ['', Validators.required],
        stitches: ['', Validators.pattern(/\d+/)],
        rows: ['', Validators.pattern(/\d+/)]
      }),
      measurements: this.fb.group({
        isStandard: [true],
        chest: ['', Validators.required], // array
        torso: ['', Validators.required], // array
        sleeve: ['', Validators.required] // array
      })
    });
  }

} // end class
