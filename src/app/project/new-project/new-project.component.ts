import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.type';
import { take, delay } from 'rxjs/operators';

@Component({
  selector: 'knit-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title: 'New Project';
  project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getDefaultProject('lopi')
      .pipe(
        take(1),
        delay(1000)
        )
      .subscribe(defaultProject => {
        this.project = defaultProject;
      });
  }

  onValueChanges(project: Project): void {
    this.project = project;
  }

  onSave(project: Project) {
    console.log('save clicked!', project);
    this.projectService.addProject(project)
      .subscribe(newProject => {
        console.log('saved!', newProject);
      });
  }

  onCancel() {
    console.log('cancel clicked!');
  }

} // end class
