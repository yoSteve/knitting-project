import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, combineLatest } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { ProjectState } from '../state/project.state';
import { Observable } from 'rxjs';
import { Project } from '../project.type';
import { SetCurrentProject } from '../state/project.action';

@Component({
  selector: 'knit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  title = 'Project Details';
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

  onNavigate(route: string): void {
    this.router.navigate([route], { relativeTo: this.route });
  }
} // end class
