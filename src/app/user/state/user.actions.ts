import { User } from './user.type';

export class SetCurrentUser {
  static readonly type = '[User] Set Current';
  constructor(public id: string) {}
}

export class SetProjectOwner {
  static readonly type = '[User] Set Project Owner';
  constructor(public id: string) {}
}

// TODO: implement this Action
export class AddUser {
  static readonly type = '[User] Add User';
  constructor(public user: string) {}
}

// TODO: implement this Action
export class UpdateUser {
  static readonly type = '[User] Update User';
  constructor(public user: string) {}
}

// TODO: implement this Action
export class RemoveUser {
  static readonly type = '[User] Remove User';
  constructor(public id: string) {}
}
