import { Component, OnInit } from '@angular/core';
import { Project } from '@app/project/state/project.type';

@Component({
  selector: 'knit-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss']
})
export class PatternComponent implements OnInit {
  private id: string; // get :id from url param
  project: Project; // get current project from store, or fetch
  // @Select(ProjectState.currentProject) project$: Observable<Project>;

  constructor() { }

  ngOnInit() {
  }

}
