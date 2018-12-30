import { Component, OnInit } from '@angular/core';
import { Project } from '../project.type';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'knit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  project: Project;
  loaded = false;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id),
        switchMap(id => this.projectService.getProject(id))
      )
      .subscribe(project => {
        this.project = project;
        this.loaded = true;
      });
  }

}
