import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'knit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  title = 'Project Details';
  project$ = this.projectService.project$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  onNavigate(route: string): void {
    this.router.navigate([route], {relativeTo: this.route});
  }
} // end class
