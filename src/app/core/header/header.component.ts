import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'knit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  routes = [
    { route: '/', name: 'Home' },
    { route: 'project/new', name: 'New Project' },
    { route: 'projects', name: 'Projects List' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
