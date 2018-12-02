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
