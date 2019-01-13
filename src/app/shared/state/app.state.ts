import { State, Selector } from '@ngxs/store';

export class GlobalStateModel {
  readonly appName: string;
}

@State<GlobalStateModel>({
  name: 'global',
  defaults: {
    appName: 'Knitty'
  }
})
export class GlobalState {
  @Selector()
  static appName(state: GlobalStateModel) {
    return state.appName;
  }
}
