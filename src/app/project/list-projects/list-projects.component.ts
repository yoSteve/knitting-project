import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProjectState } from '../state/project.state';
import { Project } from '../project.type';

@Component({
  selector: 'knit-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  title = `List o' Projects`;
  @Select(ProjectState.projects) projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router, private store: Store) { }

  ngOnInit() {
  }

  onEdit(id) {
    this.router.navigate(['..', 'project', id, 'edit']);
  }

  onDelete(id) {
    this.projectService.deleteProject(id)
      .subscribe(res => {
        console.log('deleted! ', res);
      });
  }

}
