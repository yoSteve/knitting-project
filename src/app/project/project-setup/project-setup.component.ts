import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'knit-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit, OnChanges {
  title = 'Project Setup';
  form = this.projectService.buildProjectForm();
  needleConversion: Observable<any[]>;
  defaultsLoaded = false;
  sweater = {
    // name: 'My Sweater',
    // isMetric: this.isMetric,
    // guage: this.defaults.guage || {},
    // measurements: this.defaults.measurements || {}
    guage: {},
    measurements: {}
  };

  // TODO: converting form template based forms to reactive forms.
  // TODO: set defaults onInit.

  constructor(private projectService: ProjectService) {}

  get isMetric(): FormControl {
    return this.form.get('isMetric') as FormControl;
  }

  get isStandard(): FormControl {
    return this.form.get('measurements').get('isStandard') as FormControl;
  }

  get projectName(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get needlesControl(): FormControl {
    return this.form.get('guage').get('needles') as FormControl;
  }

  get guageNeedles(): number[] {
    return this.needlesControl.value.split(',');
  }

  ngOnInit() {
    console.log('form: ', this.form);
    this.needleConversion = this.projectService.getNeedles();
    this.projectService.getDefaults('lopi')
      .subscribe(defaults => {
        this.sweater.guage = defaults.guage;
        this.sweater.measurements = defaults.measurements;
        this.defaultsLoaded = true;
      });
  }

  ngOnChanges() {
    console.log('change detected');
  }

  // TODO: create a shared Conversion service to handle this
  toInches(cm) {
    return Math.round(cm * 0.393701);
  }

  // TODO: create a shared Conversion service to handle this
  toCm(inches) {
    return Math.round(inches * 2.54);
  }

  onSubmit() {
    console.log('Submitted!', this.form);
  }

  private getMeasurements(bodyPart) {
    if (this.isMetric) {
      return this.sweater.measurements[bodyPart].join(', ') + ' cm';
    } else {
      console.log('doing inches');
      const inches = this.sweater.measurements[bodyPart].map(measurement =>
        this.toInches(measurement)
      );
      return inches.join(', ') + ' inches';
    }
  }
}
