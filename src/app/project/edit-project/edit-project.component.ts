import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.type';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'knit-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  title: 'Edit Project';
  project$ = this.projectService.project$;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params.id)
      )
      .subscribe(id => {
        if (!this.projectService.project || id !== this.projectService.project.id) {
          this.projectService.fetchProject(id);
        }
      });
  }

  onValueChanges(project: Project): void {
    this.project$.next(project);
  }

  onSave() {
    console.log('save clicked!');
  }

  onCancel() {
    console.log('cancel clicked!');
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
