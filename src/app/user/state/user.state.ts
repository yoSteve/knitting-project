import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SetCurrentUser, SetProjectOwner } from './user.actions';
import { User } from './user.type';
import { tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { of } from 'rxjs';

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
  public static currentUser(state: UserStateModel) {
    return state.currentUser;
  }

  @Selector()
  public static projectOwner(state: UserStateModel) {
    return state.currentProjectOwner;
  }

  @Action(SetCurrentUser)
  setCurrent(
    ctx: StateContext<UserStateModel>,
    payload: SetCurrentUser
  ) {
    const state = ctx.getState();
    if (state.currentUser && state.currentUser.id === payload.id) {
      return of(state.currentUser);
    }
    return this.userService.getUser(payload.id)
      .pipe(
        tap(user => ctx.patchState({ currentUser: user }))
      );
  }

  @Action(SetProjectOwner)
  SetProjectOwner(
    ctx: StateContext<UserStateModel>,
    payload: SetCurrentUser
  ) {
    const state = ctx.getState();
    if (state.currentProjectOwner && state.currentProjectOwner.id === payload.id) {
      return of(state.currentProjectOwner);
    }
    return this.userService.getUser(payload.id)
      .pipe(
        tap(user => ctx.patchState({ currentProjectOwner: user }))
      );
  }

} // end class
