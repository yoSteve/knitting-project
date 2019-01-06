import { Project } from '../project.type';

export class GetProjects {
  static readonly type = '[Project] Get Projects';
}

export class AddProject {
  static readonly type = '[Project] Add Project';
  constructor(public payload: Project) {}
}
