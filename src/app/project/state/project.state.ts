import { Project } from './project.type';
import { State, Selector, Action, StateContext, NgxsOnInit, Store } from '@ngxs/store';
import { AddProject, GetProjects, RemoveProject, UpdateProject, SetCurrentProject } from './project.action';
import { ProjectService } from '../project.service';
import { tap } from 'rxjs/operators';
import { SetProjectOwner } from '@app/user/state/user.actions';
import { of } from 'rxjs';

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

  ngxsOnInit(ctx: StateContext<ProjectStateModel>) {
    ctx.dispatch(new GetProjects());
  }

  @Action(GetProjects)
  getAll(ctx: StateContext<ProjectStateModel>) {
    return this.projectService.getProjects()
      .pipe(
        tap(projects => ctx.patchState({ projects }))
      );
  }

  @Action(SetCurrentProject)
  setCurrent(
    ctx: StateContext<ProjectStateModel>,
    payload: SetCurrentProject
  ) {
    const state = ctx.getState();
    if (state.currentProject && state.currentProject.id === payload.id) {
      return of(state.currentProject.id);
    }
    return this.projectService.getProject(payload.id)
      .pipe(
        tap(foundProject => {
          ctx.patchState({ currentProject: foundProject });
          this.store.dispatch(new SetProjectOwner(foundProject.owner_id));
        })
      );
  }

  @Action(AddProject)
  add(
    ctx: StateContext<ProjectStateModel>,
    payload: AddProject
  ) {
    return this.projectService.addProject(payload.project)
      .pipe(
        tap(newProject => {
          const state = ctx.getState();
          ctx.patchState({
            currentProject: newProject,
            projects: [...state.projects, newProject]
          });
        })
      );
  }

  @Action(UpdateProject)
  update(
    ctx: StateContext<ProjectStateModel>,
    payload: UpdateProject
  ) {
    return this.projectService.updateProject(payload.project)
      .pipe(
        tap(updatedProject => {
          const updated = ctx.getState().projects.map(project => {
            return project.id === payload.project.id ? payload.project : project;
          });
          ctx.patchState({
            currentProject: updatedProject,
            projects: [...updated]
          });
        })
      );
  }

  @Action(RemoveProject)
  delete(
    ctx: StateContext<ProjectStateModel>,
    payload: RemoveProject
  ) {
    return this.projectService.deleteProject(payload.id)
      .pipe(
        tap(() => {
          const filtered = ctx.getState().projects.filter(project => project.id !== payload.id);
          const current = ctx.getState().currentProject;
          ctx.patchState({
            currentProject: current.id === payload.id ? null : current,
            projects: [...filtered]
          });
        })
      );
  }

} // end class
