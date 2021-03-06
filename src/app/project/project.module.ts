import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { DetailsFormComponent } from './presentational/details-form/details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsTableComponent } from './presentational/details-table/details-table.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { OverviewComponent } from './overview/overview.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { NgxsModule } from '@ngxs/store';
import { ProjectState } from './state/project.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProjectComponent,
    DetailsFormComponent,
    DetailsTableComponent,
    NewProjectComponent,
    OverviewComponent,
    EditProjectComponent,
    ListProjectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    NgxsModule.forFeature([ProjectState])
  ]
})
export class ProjectModule {}
