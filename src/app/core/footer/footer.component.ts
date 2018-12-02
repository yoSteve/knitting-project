import { Component, Input } from '@angular/core';

@Component({
  selector: 'knit-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() title: string;
  @Input() author: string;
  @Input() githubURL: string;
  @Input() twitterURL: string;
  @Input() instagramURL: string;
  @Input() year: number|string;

  constructor() {}

}
