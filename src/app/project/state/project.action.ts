import { Project } from './project.type';

export class GetProjects {
  static readonly type = '[Project] Get Projects';
}

export class SetCurrentProject {
  static readonly type = '[Project] Set Current';
  constructor(public id: string) { }
}

export class AddProject {
  static readonly type = '[Project] Add Project';
  constructor(public project: Project) {}
}

export class UpdateProject {
  static readonly type = '[Project] Update Project';
  constructor(public project: Project) {}
}

export class RemoveProject {
  static readonly type = '[Project] Remove Project';
  constructor(public id: string) {}
}
