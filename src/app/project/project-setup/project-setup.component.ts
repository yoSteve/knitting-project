import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  // needleConversion: Observable<any> = this.projectService.getNeedles();
  defaultsLoaded = false;

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

  ngOnInit() {
    this.needleConversion = this.projectService.getNeedles();
    this.projectService.getDefaults('lopi').subscribe(defaults => {
      this.guage.patchValue(defaults.guage);
      this.measurements.patchValue(defaults.measurements);
      this.projectName.patchValue('My Sweater');
      this.defaultsLoaded = true;
    });
  }

  ngOnChanges() {}

  onSubmit() {
    console.log('submitted!');
  }
}
