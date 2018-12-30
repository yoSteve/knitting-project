import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectDetailsComponent } from './presentational/project-details/project-details.component';
import { PatternInstructionsComponent } from './pattern-instructions/pattern-instructions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectTableComponent } from './presentational/project-table/project-table.component';
import { NewProjectComponent } from './new-project/new-project.component';

@NgModule({
  declarations: [ProjectComponent, ProjectDetailsComponent, PatternInstructionsComponent, ProjectTableComponent, NewProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
