import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternRoutingModule } from './pattern-routing.module';
import { LopiComponent } from './lopi/lopi.component';
import { PatternComponent } from './pattern.component';
import { NgxsModule } from '@ngxs/store';
import { ProjectState } from '@app/project/state/project.state';

@NgModule({
  declarations: [LopiComponent, PatternComponent],
  imports: [
    CommonModule,
    PatternRoutingModule,
    NgxsModule.forFeature([ProjectState])
  ]
})
export class PatternModule { }
