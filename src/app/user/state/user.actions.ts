export class UserAction {
  public static readonly type = '[User] Add item';
  constructor(public payload: string) { }
}