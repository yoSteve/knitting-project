import { State, Selector } from '@ngxs/store';
import { User } from '@app/user/state/user.type';

export class GlobalStateModel {
  readonly appName: string;
  currentUser: User;
}

@State<GlobalStateModel>({
  name: 'global',
  defaults: {
    appName: 'Knitty',
    currentUser: {
      id: 'user1',
      name: 'Steve Dev',
      email: 'steve.yorke@gmail.com'
    }
  }
})
export class GlobalState {
  @Selector()
  static appName(state: GlobalStateModel) {
    return state.appName;
  }

  @Selector()
  static currentUser(state: GlobalStateModel) {
    return state.currentUser;
  }
}
