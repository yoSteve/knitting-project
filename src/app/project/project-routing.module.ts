import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { PatternInstructionsComponent } from './pattern-instructions/pattern-instructions.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      { path: 'new', component: NewProjectComponent },
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
