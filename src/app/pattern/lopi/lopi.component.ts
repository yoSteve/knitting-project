import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@app/project/state/project.type';

@Component({
  selector: 'knit-lopi',
  templateUrl: './lopi.component.html',
  styleUrls: ['./lopi.component.scss']
})
export class LopiComponent implements OnInit {
  @Input() project: Project;
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
