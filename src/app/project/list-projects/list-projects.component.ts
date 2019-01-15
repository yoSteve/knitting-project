import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProjectState } from '../state/project.state';
import { Project } from '../state/project.type';
import { RemoveProject } from '../state/project.action';
import { UserState } from '@app/user/state/user.state';
import { User } from '@app/user/state/user.type';

@Component({
  selector: 'knit-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  title = `List o' Projects`;
  // TODO: get/filter projects by owner_id
  @Select(ProjectState.projects) projects$: Observable<Project[]>;
  @Select(UserState.currentUser) currentUser$: Observable<User>;

  constructor(
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {}

  onEdit(id: string) {
    this.router.navigate(['..', 'projects', id, 'edit']);
  }

  onDelete(id: string) {
    this.store.dispatch(new RemoveProject(id));
  }
}
