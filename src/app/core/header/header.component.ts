import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from '@app/user/state/user.state';
import { Observable } from 'rxjs';
import { SetCurrentUser } from '@app/user/state/user.actions';
import { User } from '@app/user/state/user.type';

@Component({
  selector: 'knit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Select(UserState.currentUser) currentUser$: Observable<User>;

  routes = [
    { route: '/', name: 'Home' },
    { route: 'projects/new', name: 'New Project' },
    { route: 'projects/list', name: 'Projects List' }
  ];

  constructor(private store: Store) { }

  ngOnInit() {
  }

  signInAs(userId: string) {
    this.store.dispatch(new SetCurrentUser(userId));
  }

}
