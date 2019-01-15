import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { User } from '../state/user.type';
import { UserState } from '../state/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'knit-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Select(UserState.currentUser) user$: Observable<User>;

  constructor() { }

  ngOnInit() {
  }

}
