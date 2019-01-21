import { Project } from './project.type';

export class GetProjects {
  static readonly type = '[Project] Get Projects';
}

export class SetCurrentProject {
  static readonly type = '[Project] Set Current';
  constructor(public payload: string) { }
}

export class AddProject {
  static readonly type = '[Project] Add Project';
  constructor(public payload: Project) {}
}

export class UpdateProject {
  static readonly type = '[Project] Update Project';
  constructor(public payload: Project) {}
}

export class RemoveProject {
  static readonly type = '[Project] Remove Project';
  constructor(public payload: string) {}
}
