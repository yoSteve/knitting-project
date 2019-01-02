import { Injectable } from '@angular/core';
import { PROJECTS } from '@app/_data/project.data';
import { Project } from './project.type';
import { NEEDLE_SIZES } from '@app/_data/needle-sizes.data';
import { Defaults, LOPI_DEFAULTS } from '@app/_data/defaults-lopi.data';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment as ENV } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = `${ENV.databaseUrl}/projects`;
  public project$ = new BehaviorSubject(null);
  projects: Project[] = PROJECTS;
  needles: any[] = NEEDLE_SIZES;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  fetchProject(id): void {
    this.http.get<Project>(`${this.url}/${id}`)
      .subscribe(data => this.project$.next(data));
  }

  getDefaultProject(type): Observable<Project> {
    // switch (type) {
    //   case 'lopi':
    return of({
      id: null,
      name: 'My Sweater',
      is_metric: true,
      guage: LOPI_DEFAULTS.guage,
      measurements: LOPI_DEFAULTS.measurements
    });
    // }
  }

  getNeedles(): Observable<any[]> {
    return of(this.needles);
  }

  buildProjectForm(project: Project): FormGroup {
    return this.fb.group({
      id: [project.id],
      name: [project.name, Validators.required],
      is_metric: [project.is_metric],
      guage: this.fb.group({
        custom_guage: [project.guage.custom_guage],
        needles: [project.guage.needles, Validators.required], // array
        width: [project.guage.width, Validators.required],
        height: [project.guage.height, Validators.required],
        stitches: [project.guage.stitches, Validators.pattern(/\d+/)],
        rows: [project.guage.rows, Validators.pattern(/\d+/)]
      }),
      measurements: this.fb.group({
        is_standard: [project.measurements.is_standard],
        chest: [
          {
            value: project.measurements.chest,
            disabled: project.measurements.is_standard
          },
          Validators.required
        ], // array
        torso: [
          {
            value: project.measurements.torso,
            disabled: project.measurements.is_standard
          },
          Validators.required
        ], // array
        sleeve: [
          {
            value: project.measurements.sleeve,
            disabled: project.measurements.is_standard
          },
          Validators.required
        ] // array
      })
    });
  }
} // end class
