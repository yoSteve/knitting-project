import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PatternInstructionsComponent } from './pattern-instructions/pattern-instructions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectTableComponent } from './project-table/project-table.component';

@NgModule({
  declarations: [ProjectComponent, ProjectDetailsComponent, PatternInstructionsComponent, ProjectTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
