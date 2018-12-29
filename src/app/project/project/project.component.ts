import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'knit-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProject('prj000');
  }

  getProject(id) {
    // console.log(this.projectService.getProject(id));
    console.log('ProjectComponent.getProject() has fired');
  }
}


/**
 * TODO: use Project Component as Master component.
 * Load Project by id or get Defaults if new
 * Pass Project to child (Project Setup or Pattern Instructions)
 * create Reactive Form in Child as necessary
 */
