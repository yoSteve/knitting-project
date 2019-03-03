import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, delay, take, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { ProjectState } from '../state/project.state';
import { Observable, of } from 'rxjs';
import { Project } from '../state/project.type';
import { SetCurrentProject } from '../state/project.action';
import { UserState } from '@app/user/state/user.state';
import { User } from '@app/user/state/user.type';

@Component({
  selector: 'knit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  title = 'Project Details';
  projectId: string;
  @Select(ProjectState.currentProject) project$: Observable<Project>;
  @Select(UserState.projectOwner) owner$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id),
        tap(id => this.projectId = id),
        withLatestFrom(this.project$),
        take(1),
        switchMap(([id, project]) => {
          return !project || id !== project.id
            ? this.store.dispatch(new SetCurrentProject(id))
            : of(project);
        }),
        delay(600)
      )
      .subscribe();
  }

} // end class
