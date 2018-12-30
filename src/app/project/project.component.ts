import { Component } from '@angular/core';

@Component({
  selector: 'knit-project',
  template: `
    <router-outlet></router-outlet>
  `
})
export class ProjectComponent {

  constructor() { }

}


/**
 * TODO: use Project Component as Master component.
 * Load Project by id or get Defaults if new
 * Pass Project to child (Project Setup or Pattern Instructions)
 * create Reactive Form in Child as necessary
 */
