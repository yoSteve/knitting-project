import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserState, UserStateModel } from './user.state';
import { UserAction } from './user.actions';

describe('User store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UserState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: UserStateModel = {
      items: ['item-1']
    };
    store.dispatch(new UserAction('item-1'));
    const actual = store.selectSnapshot(UserState.getState);
    expect(actual).toEqual(expected);
  });

});
