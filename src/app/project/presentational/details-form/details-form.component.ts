import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { Observable } from 'rxjs';
import { Project } from '@app/project/project.type';

@Component({
  selector: 'knit-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
  @Input() project: Project;
  form: FormGroup;
  needles: Observable<any[]>;

  constructor(
    private projectService: ProjectService) {}

  ngOnInit() {
    this.needles = this.projectService.getNeedles();
    this.form = this.projectService.buildProjectForm(this.project);
    this.isStandard.valueChanges
      .subscribe(value => this.onStandardChanges(value));
  }

  get isMetric(): FormControl {
    return this.form.get('isMetric') as FormControl;
  }

  get isStandard(): FormControl {
    return this.form.get('measurements').get('isStandard') as FormControl;
  }

  get projectName(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get guage(): FormGroup {
    return this.form.get('guage') as FormGroup;
  }

  get measurements(): FormGroup {
    return this.form.get('measurements') as FormGroup;
  }

  get needlesControl(): FormControl {
    return this.guage.get('needles') as FormControl;
  }

  get guageNeedles(): number[] {
    return this.needlesControl.value.split(',');
  }

  onSubmit() {
    console.log('submitted!');
  }

  private onStandardChanges(value: boolean) {
    if (value) {
      this.measurements.get('chest').disable();
      this.measurements.get('torso').disable();
      this.measurements.get('sleeve').disable();
    } else {
      this.measurements.get('chest').enable();
      this.measurements.get('torso').enable();
      this.measurements.get('sleeve').enable();
    }
  }
} // end class
