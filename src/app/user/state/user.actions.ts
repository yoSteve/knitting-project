import { User } from './user.type';

export class SetCurrentUser {
  static readonly type = '[User] Set Current';
  constructor(public payload: string) {}
}

export class SetProjectOwner {
  static readonly type = '[User] Set Project Owner';
  constructor(public payload: string) {}
}

export class AddUser {
  static readonly type = '[User] Add User';
  constructor(public payload: string) {}
}

export class UpdateUser {
  static readonly type = '[User] Update User';
  constructor(public payload: string) {}
}

export class RemoveUser {
  static readonly type = '[User] Remove User';
  constructor(public payload: string) {}
}
