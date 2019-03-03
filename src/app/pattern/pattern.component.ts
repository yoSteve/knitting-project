import { Component, OnInit } from '@angular/core';
import { Project } from '@app/project/state/project.type';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ProjectState } from '@app/project/state/project.state';
import { Observable, of } from 'rxjs';
import { SetCurrentProject } from '@app/project/state/project.action';
import { delay, map, take, switchMap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'knit-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss']
})
export class PatternComponent implements OnInit {
  @Select(ProjectState.currentProject) project$: Observable<Project>;

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id),
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

}
