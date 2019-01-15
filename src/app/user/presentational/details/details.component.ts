import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/user/state/user.type';

@Component({
  selector: 'knit-user-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
