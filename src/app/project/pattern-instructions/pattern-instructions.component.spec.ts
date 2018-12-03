// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { PatternInstructionsComponent } from './pattern-instructions.component';
// import { ProjectService } from '../project.service';
// import { from } from 'rxjs';

// xdescribe('PatternInstructionsComponent', () => {
//   let component: PatternInstructionsComponent;
//   let fixture: ComponentFixture<PatternInstructionsComponent>;
//   let service: ProjectService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [PatternInstructionsComponent],
//       providers: [ProjectService]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PatternInstructionsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     service = new ProjectService();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('#getProject()', () => {
//     it('should return a project from ProjectService', async () => {
//       spyOn(service, 'getProject').and.returnValue(true);
//       expect(component.getProject('anything')).toBeTruthy();
//     });

//     it('should set the value of component.project', async () => {
//       component.project_id = 'prj000';
      
//       spyOn(service, 'getProject').and.

//       component.ngOnInit();

//       expect(test.project).toBeOfType(Project);
//     });
    
//     describe('given a project', () => {
//       beforeAll(() => {
//         component.project_id = 'prj000';
//         component.ngOnInit();
//       });

//       it('should have mainNeedle (array)', () => {
//         expect(component.mainNeedle.length).not.toBe(0);
//         // expect(component.mainNeedle).toBeArrayOfNumbers();
//       });

//       it('should have cuffColor');
//       it('should have bodyColor');
//       it('should have collarColor');

//       it('should have an array of chestMeasurements', async () => {
//         component.ngOnInit().then(() => {
//           expect(component.chestMeasurments.length).not.toBe(0);
//           expect(component.chestMeasurments).toBeArrayOfNumbers();
//         });
//       });
//       it('should have an array of torsoMeasurements', async () => {
//         component.ngOnInit().then(() => {
//           expect(component.torsoMeasurements.length).not.toBe(0);
//           expect(component.torsoMeasurements).toBeArrayOfNumbers();
//         });
//       });
//       it('should have sleeveMeasurements');
//       it('should have guageWidth');
//       it('should have guageStitches');
//       it('should have guageHeight');
//       it('should have guageRows');
//     });
//   }); // end describe('#getProject()')

//   describe('given mainNeedle', () => {
//     it('cuff needle should be one size smaller');
//   });

//   describe('given chestMeasurements', () => {
//     // before each
//     describe('GET#BodyCastOn()', () => {
//       it('should calculate bodyCastOn');
//     });

//     describe('GET#ChestAndBackStitches()', () => {
//       it('should calculate stitches across front of chest and back minus underarm stitches');
//     });
//   }); // end describe('given chestMeasurements')

//   describe('given sleeveMeasurements', () => {
//     // before each
//     describe('GET#SleeveCastOn()', () => {
//       it('should calculate sleeve cast-on');
//     });

//     describe('GET#CuffIncrease()', () => {
//       it('should calculate how many stitches to increase from cuff to sleeve');
//     });

//     describe('GET#SleeveIncrease()', () => {
//       it('should calculate total number of sleeve increase stitches');
//     });

//     describe('GET#SleeveIncreaseRound()', () => {
//       it('should calculate which rounds get sleeve increases');
//     });

//     describe('GET#SleeveStitchesFinal()', () => {
//       it('should calculate final number of sleeve stitches after increases');
//     });

//     describe('GET#UnderarmStitches()', () => {
//       it('should calculate the number of underarm stitches');
//     });

//   }); // end descibe('given sleeveMeasurments')

//   describe('given sleeveStitchesFinal & chestAndBackStitches', () => {
//     describe('GET#InitialYokeStitches()', () => {
//       it('should calculate the total number of live stitches after placing torso and both sleeves on round needle');
//     });

//     describe('GET#InitialYokeStitches()', () => {
//       it('should calculate the total number of live stitches after placing torso and both sleeves on round needle');
//     });

//     describe('GET#finalYokeStitches()', () => {
//       it('should calculate the final number of stitches after placing yoke pattern is complete');
//     });

//     describe('GET#collarDecreases()', () => {
//       it('should calculate the number of decreases from end of yoke pattern to begining of collar rib');
//     });

//     describe('GET#collarStitches()', () => {
//       it('should calculate the total number of stitches for the collar rib');
//     });

//   }); // end describe('given sleeveStitchesFinal & chestAndBackStitches')

// }); // end describe('PatternInstructionsComponent')


