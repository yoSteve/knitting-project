import { Project } from './project.type';
import { State, Selector, Action, StateContext, NgxsOnInit, Store } from '@ngxs/store';
import { AddProject, GetProjects, RemoveProject, UpdateProject, SetCurrentProject } from './project.action';
import { ProjectService } from '../project.service';
import { tap } from 'rxjs/operators';
import { SetProjectOwner } from '@app/user/state/user.actions';

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
  constructor(private projectService: ProjectService, private store: Store) {}

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
    return this.projectService.getProjects()
      .pipe(
        tap(projects => patchState({ projects }))
      );
  }

  @Action(SetCurrentProject)
  setCurrent(
    { patchState }: StateContext<ProjectStateModel>,
    { payload }: SetCurrentProject
  ) {
    return this.projectService.getProject(payload)
      .pipe(
        tap(foundProject => {
          patchState({ currentProject: foundProject });
          this.store.dispatch(new SetProjectOwner(foundProject.owner_id));
        })
      );
  }

  @Action(AddProject)
  add(
    { getState, patchState }: StateContext<ProjectStateModel>,
    { payload }: AddProject
  ) {
    return this.projectService.addProject(payload)
      .pipe(
        tap(newProject => {
          const state = getState();
          patchState({
            currentProject: newProject,
            projects: [...state.projects, newProject]
          });
        })
      );
  }

  @Action(UpdateProject)
  update(
    { getState, patchState }: StateContext<ProjectStateModel>,
    { payload }: UpdateProject
  ) {
    return this.projectService.updateProject(payload)
      .pipe(
        tap(updatedProject => {
          const updated = getState().projects.map(project => {
            return project.id === payload.id ? payload : project;
          });
          patchState({
            currentProject: updatedProject,
            projects: [...updated]
          });
        })
      );
  }

  @Action(RemoveProject)
  delete(
    { getState, patchState }: StateContext<ProjectStateModel>,
    { payload }: RemoveProject
  ) {
    return this.projectService.deleteProject(payload)
      .pipe(
        tap(() => {
          const filtered = getState().projects.filter(project => project.id !== payload);
          const current = getState().currentProject;
          patchState({
            currentProject: current.id === payload ? null : current,
            projects: [...filtered]
          });
        })
      );
  }

} // end class
