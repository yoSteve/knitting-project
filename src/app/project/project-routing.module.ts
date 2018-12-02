import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { ProjectComponent } from './project/project.component';
import { PatternInstructionsComponent } from './pattern-instructions/pattern-instructions.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      { path: 'new', component: ProjectSetupComponent },
      // { path: ':id', component: ProjectOverviewComponent } /* Project Overview */
      // { path: ':id/edit', component: ProjectEditComponent } /* Edit Project params */
      // { path: ':id/design', component: ProjectDesignComponent } /* Project Design view */
      { path: ':id/print', component: PatternInstructionsComponent } /* Print ready pattern view  */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
