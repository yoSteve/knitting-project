import { Component, OnInit } from '@angular/core';
import { Project } from '../project.type';
import { ProjectService } from '../project.service';

@Component({
  selector: 'knit-pattern-instructions',
  templateUrl: './pattern-instructions.component.html',
  styleUrls: ['./pattern-instructions.component.scss']
})
export class PatternInstructionsComponent implements OnInit {
  project_id;
  project: Project;
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

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  getProject(id) {
    this.projectService.getProject(id)
      .then(proj => this.project = proj)
      .then(() => {
        this.mainNeedle = this.project.guage.needles;
        // this.chestMeasurments = this.project.measurements.chest;
      });
  }

}
