import { Project } from '../project.type';
import { State, Selector, Action, StateContext, NgxsOnInit } from '@ngxs/store';
import { AddProject, GetProjects, RemoveProject } from './project.action';
import { ProjectService } from '../project.service';
import { tap } from 'rxjs/operators';

export class ProjectStateModel {
  readonly projects: Project[];
  readonly currentProject: Project;
}

@State<ProjectStateModel>({
  name: 'projects',
  defaults: {
    projects: [],
    currentProject: null
  }
})
export class ProjectState implements NgxsOnInit {
  constructor(private projectService: ProjectService) {}

  @Selector()
  static projects(state: ProjectStateModel) {
    return state.projects;
  }

  @Selector()
  static currentProject(state: ProjectStateModel) {
    return state.currentProject;
  }

  ngxsOnInit(context: StateContext<ProjectStateModel>) {
    context.dispatch(new GetProjects());
  }

  @Action(GetProjects)
  getAll({ patchState }: StateContext<ProjectStateModel>) {
    return this.projectService
      .getProjects()
      .pipe(tap(projects => patchState({ projects })));
    {
    }
  }

  @Action(AddProject)
  add(
    { getState, patchState }: StateContext<ProjectStateModel>,
    { payload }: AddProject
  ) {
    return this.projectService
      .addProject(payload)
      .pipe(
        tap(newProject => {
          const state = getState();
          patchState({
            projects: [...state.projects, newProject]
          });
        })
      );
  }

  @Action(RemoveProject)
  delete(
    { getState, patchState }: StateContext<ProjectStateModel>,
    { payload }: RemoveProject
  ) {
    return this.projectService
      .deleteProject(payload)
      .pipe(
        tap(() => {
          const filtered = getState().projects.filter(project => project.id !== payload);
          patchState({
            projects: [...filtered]
          });
        })
      );
  }
} // end class
