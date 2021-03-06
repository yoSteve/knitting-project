import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app/user/state/user.type';
import { Router } from '@angular/router';

@Component({
  selector: 'knit-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {
  @Input() user: User;
  @Output() changeUser = new EventEmitter();
  menuOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProfile() {
    this.router.navigate(['users', this.user.id]);
  }

}
