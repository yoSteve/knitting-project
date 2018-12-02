import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { PatternInstructionsComponent } from './pattern-instructions/pattern-instructions.component';

@NgModule({
  declarations: [ProjectComponent, ProjectSetupComponent, PatternInstructionsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
