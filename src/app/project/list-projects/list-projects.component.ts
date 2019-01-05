import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'knit-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  title = `List o' Projects`;
  projects$ = this.projectService.getProjects();

  constructor(private projectService: ProjectService, private router: Router) { }

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
