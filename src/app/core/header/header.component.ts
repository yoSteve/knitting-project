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
    { route: 'project/new', name: 'Project Setup' },
    { route: 'project/123/print', name: 'Pattern Instructions' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
