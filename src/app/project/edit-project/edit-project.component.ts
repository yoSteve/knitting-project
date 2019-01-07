import { Component, OnInit } from '@angular/core';
import { Project } from '../project.type';
import { ActivatedRoute, Router } from '@angular/router';
import { map, combineLatest, delay } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { UpdateProject, SetCurrentProject } from '../state/project.action';
import { Observable } from 'rxjs';
import { ProjectState } from '../state/project.state';

@Component({
  selector: 'knit-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  title = 'Edit Project';
  @Select(ProjectState.currentProject) project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id),
        combineLatest(this.project$),
        delay(600)
      )
      .subscribe(combined => {
        if (!combined[1] || combined[0] !== combined[1].id) {
          this.store.dispatch(new SetCurrentProject(combined[0]));
        }
    });
  }

  onSave(project: Project): void {
    this.store.dispatch([
      new UpdateProject(project),
      new SetCurrentProject(project.id)
    ]);
  }

  onCancel(): void {
    console.log('cancel clicked!');
    this.router.navigate(['../'], { relativeTo: this.route });
  }

} // end class
