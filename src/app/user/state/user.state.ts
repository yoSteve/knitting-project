import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SetCurrentUser, SetProjectOwner } from './user.actions';
import { User } from './user.type';
import { tap } from 'rxjs/operators';
import { UserService } from '../user.service';

export interface UserStateModel {
  readonly currentUser: User;
  readonly currentProjectOwner: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    currentUser: null,
    currentProjectOwner: null
  }
})
export class UserState {
  constructor(private userService: UserService) {}

  @Selector()
  public static current(state: UserStateModel) {
    return state.currentUser;
  }

  @Selector()
  public static projectOwner(state: UserStateModel) {
    return state.currentProjectOwner;
  }

  @Action(SetCurrentUser)
  setCurrent(
    { patchState }: StateContext<UserStateModel>,
    { payload }: SetCurrentUser
  ) {
    return this.userService.getUser(payload)
      .pipe(
        tap(user => patchState({ currentUser: user }))
      );
  }

  @Action(SetProjectOwner)
  SetProjectOwner(
    { patchState }: StateContext<UserStateModel>,
    { payload }: SetCurrentUser
  ) {
    return this.userService.getUser(payload)
      .pipe(
        tap(user => patchState({ currentProjectOwner: user }))
      );
  }

} // end class
