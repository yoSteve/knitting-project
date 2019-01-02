import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { PatternInstructionsComponent } from './pattern-instructions/pattern-instructions.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { OverviewComponent } from './overview/overview.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      { path: 'new', component: NewProjectComponent },
      { path: ':id/edit', component: EditProjectComponent }, /* Edit Project params */
      // { path: ':id/design', component: ProjectDesignComponent } /* Project Design view */
      { path: ':id/print', component: PatternInstructionsComponent }, /* Print ready pattern view  */
      { path: ':id', component: OverviewComponent } /* Project Overview */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
