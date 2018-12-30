import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.type';

import { Defaults } from 'src/app/_data/defaults-lopi.data';
import { take } from 'rxjs/operators';

@Component({
  selector: 'knit-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title: 'New Project';
  loaded = false;
  project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getDefaults('lopi')
      .pipe(take(1))
      .subscribe(defaults => {
        this.project = this.buildDefaultProject(defaults);
        this.loaded = true;
      });
  }

  onValueChanges(project: Project): void {
    this.project = project;
  }

  private buildDefaultProject(defaults: Defaults): Project {
    return {
      id: null,
      name: 'My Sweater',
      isMetric: true,
      guage: defaults.guage,
      measurements: defaults.measurements
    };
  }

} // end class
