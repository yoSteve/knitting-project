import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { Observable } from 'rxjs';
import { Project } from '@app/project/state/project.type';

@Component({
  selector: 'knit-project-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
  form: FormGroup;
  needles: Observable<any[]>;
  @Input() project: Project;
  @Output() valueChanges = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(
    private projectService: ProjectService) {}

  ngOnInit() {
    this.needles = this.projectService.needles;
    this.form = this.projectService.buildProjectForm(this.project);
    this.is_standard.valueChanges
      .subscribe(value => this.onStandardChanges(value));
    this.form.valueChanges
      .subscribe(() => this.valueChanges.emit(this.form.getRawValue()));
  }

  get is_metric(): FormControl {
    return this.form.get('is_metric') as FormControl;
  }

  get is_standard(): FormControl {
    return this.form.get('measurements').get('is_standard') as FormControl;
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
