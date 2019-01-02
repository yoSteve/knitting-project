import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'knit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  project$ = this.projectService.project$;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        delay(1000),
        map(params => params.id)
      )
      .subscribe(id => {
        this.projectService.fetchProject(id);
      });
  }
}
