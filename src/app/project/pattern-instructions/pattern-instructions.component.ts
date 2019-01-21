import { Component, OnInit } from '@angular/core';
import { Project } from '../state/project.type';
import { Select } from '@ngxs/store';
import { ProjectState } from '../state/project.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'knit-pattern-instructions',
  templateUrl: './pattern-instructions.component.html',
  styleUrls: ['./pattern-instructions.component.scss']
})
export class PatternInstructionsComponent implements OnInit {
  project_id;
  @Select(ProjectState.currentProject) project$: Observable<Project>;
  mainNeedle = []; // defined
  cuffNeedle = '**TBD**';
  bodyCastOn = '**TBD**';
  sleeveCastOn = '**TBD**';
  cuffColor = '**TBD**'; // defined
  bodyColor = '**TBD**'; // defined
  collarColor = '**TBD**'; // defined
  bodyPatternChart = '**TBD**'; // defined
  sleevePatternChart = '**TBD**'; // defined
  yokePatternChart = '**TBD**'; // defined
  chestMeasurments = []; // defined ***
  torsoMeasurements = []; // defined ***
  sleeveMeasurements; // defined ***
  guageWidth = '10'; // defined ***
  guageHeight = '10'; // defined ***
  guageStitches = '18'; // defined ***
  guageRows = '24'; // defined ***
  cuffIncrease = '**TBD**';
  sleeveIncreases = '**TBD**';
  sleeveIncreaseRound = '**TBD**';
  sleeveStitchesFinal = '**TBD**';
  underarmStitches = '**TBD**';
  chestAndBackStitches = '**TBD**';
  initialYokeStitches = '**TBD**';
  finalYokeStitches = '**TBD**';
  collarDecreases = '**TBD**';
  collarStitches = '**TBD**';

  constructor() { }

  ngOnInit() {
  }

}
