import { Component, OnInit } from '@angular/core';
import { environment as ENV } from '@environments/environment';
import { Select } from '@ngxs/store';
import { GlobalState } from './shared/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Select(GlobalState.appName) title$: Observable<string>;

  author = 'Steve Yorke';
  githubURL = 'https://github.com/yoSteve';
  twitterURL = '#';
  instagramURL = '#';
  year;

  constructor() {
    console.log(ENV.label);
    console.log(`mascot: ${ENV.mascot}`);
  }

  ngOnInit() {
    const now = new Date();
    this.year = now.getFullYear();
  }
}
