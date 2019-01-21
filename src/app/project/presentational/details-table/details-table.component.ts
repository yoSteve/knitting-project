import { Component, Input } from '@angular/core';
import { Project, Guage, Measurements } from '../../state/project.type';
import { HelpersService } from '@app/shared/services/helpers.service';
import { User } from '@app/user/state/user.type';

@Component({
  selector: 'knit-project-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent {
  @Input() project: Project;
  @Input() owner: User;

  constructor(private helpers: HelpersService) { }

  get guage(): Guage {
    return this.project.guage;
  }

  get measurements(): Measurements {
    return this.project.measurements;
  }

  get needles(): number[] | string[] {
    if (typeof this.guage.needles === 'string') {
      const string = this.guage.needles as string;
      return string.split(',');
    } else {
      return this.guage.needles;
    }
  }

  getMeasurements(bodyPart: string): string {
    if (this.project.is_metric) {
      return this.measurements[bodyPart].join(', ') + ' cm';
    } else {
      const inches = this.measurements[bodyPart].map(measurement =>
        this.helpers.toInches(measurement)
      );
      return inches.join(', ') + ' inches';
    }
  }
}
