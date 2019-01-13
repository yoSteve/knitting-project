import { State, Selector } from '@ngxs/store';

export interface User {
  id: string;
  name: string;
  email: string;
}

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
  static getAppName(state: GlobalStateModel) {
    return state.appName;
  }
}
