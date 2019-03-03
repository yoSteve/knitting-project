import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserState, UserStateModel } from './user.state';
import { SetCurrentUser, SetProjectOwner } from './user.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { HttpClient } from 'selenium-webdriver/http';

const user1 = {
  id: 'user1',
  name: 'Steve',
  email: 'steve.yorke@gmail.com'
};

const PREV_STATE: UserStateModel = {
  currentProjectOwner: user1,
  currentUser: user1
};

describe('User store', () => {
  let store: Store;
  let service: UserService;
  class EmptyService {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxsModule.forRoot([UserState]), HttpClientTestingModule ],
      providers: [
        UserService,
        { provide: HttpClient, useValue: EmptyService }
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    service = TestBed.get(UserService);
  }));

  describe('#setCurrentUser', () => {
    const userId = user1.id;

    it('should set the current user', async() => {
      const spy = spyOn(service, 'getUser').and.callFake(() => user1);
      store.dispatch(new SetCurrentUser(userId));
      store.selectOnce((state: UserStateModel) => state.currentUser)
        .subscribe(user => {
          expect(spy).toHaveBeenCalled();
          expect(user.id).toBe(user1.id);
          expect(user.name).toBe(user1.name);
        });
    });

  }); // end setCurrentUser

  describe('#setProjectOwner', () => {
    const userId = user1.id;

    it('should set the project owner', async () => {
      const spy = spyOn(service, 'getUser').and.callFake(() => user1);
      store.dispatch(new SetCurrentUser(userId));
      store.selectOnce((state: UserStateModel) => state.currentUser)
        .subscribe(user => {
          expect(spy).toHaveBeenCalled();
          expect(user.id).toBe(user1.id);
          expect(user.name).toBe(user1.name);
        });
    });
  }); // end setProjectOwner

  describe('given a previous state', () => {
    let spy;
    const userId = user1.id;

    beforeEach(async() => {
      store.reset(PREV_STATE);
      spy = spyOn(service, 'getUser');
    });

    describe('#setCurrentUser', () => {
      it('should return user from cache if ids match', async() => {
        store.dispatch(new SetCurrentUser(userId));
        store.selectOnce((state: UserStateModel) => state.currentUser)
          .subscribe(user => {
            expect(spy).not.toHaveBeenCalled();
            expect(user.id).toBe(userId);
            expect(user.name).toBe(user1.name);
          });
      });
    }); // end #setCurrentUser

    describe('#setProjectOwner', () => {
      it('should return user from cache is ids match', async () => {
        store.dispatch(new SetProjectOwner(userId));
        store.selectOnce((state: UserStateModel) => state.currentProjectOwner)
          .subscribe(user => {
            expect(spy).not.toHaveBeenCalled();
            expect(user.id).toBe(userId);
            expect(user.name).toBe(user1.name);
          });
      });
    });
  }); // end given previous state

}); // end UserStore
