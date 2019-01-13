import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../state/project.type';
import { take, delay } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { AddProject } from '../state/project.action';
import { Router } from '@angular/router';

@Component({
  selector: 'knit-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title: 'New Project';
  project: Project;

  constructor(
    private projectService: ProjectService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectService.getDefaultProject('lopi')
      .pipe(
        take(1),
        delay(1000)
        )
      .subscribe(defaultProject => {
        this.project = defaultProject;
      });
  }

  onSave(project: Project) {
    this.store.dispatch(new AddProject(project));
  }

  onCancel() {
    this.router.navigate(['..', 'projects']);
  }

} // end class
