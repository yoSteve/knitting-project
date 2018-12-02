import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'knit-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit, OnChanges {
  @ViewChild('form') form: NgForm; // TODO: refactor to use reactive forms
  isMetric = true; // default
  isStandard = true;
  title = 'Project Setup';
  needleConversion = [];
  defaultsLoaded = false;
  sweater = {
    name: 'My Sweater',
    isMetric: this.isMetric,
    // guage: this.defaults.guage || {},
    // measurements: this.defaults.measurements || {}
    guage: {},
    measurements: {}
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.needleConversion = this.projectService.getNeedles();
    this.projectService.getDefaults('lopi').then(defaults => {
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

  getMeasurements(bodyPart) {
    if (this.isMetric) {
      console.log('doing metric');
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
