import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Project, Guage, Measurements } from '../project.type';
import { HelpersService } from '@app/shared/services/helpers.service';

@Component({
  selector: 'knit-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit, OnChanges {
  @Input() project: Project;

  constructor(private helpers: HelpersService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.project) {
      console.log('project: ', this.project);
    }
  }

  get guage(): Guage {
    return this.project.guage;
  }

  get measurements(): Measurements {
    return this.project.measurements;
  }

  getMeasurements(bodyPart) {
    if (this.project.isMetric) {
      return this.measurements[bodyPart].join(', ') + ' cm';
    } else {
      const inches = this.measurements[bodyPart].map(measurement =>
        this.helpers.toInches(measurement)
      );
      return inches.join(', ') + ' inches';
    }
  }
}
