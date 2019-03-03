import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternRoutingModule } from './pattern-routing.module';
import { LopiComponent } from './lopi/lopi.component';
import { PatternComponent } from './pattern.component';

@NgModule({
  declarations: [LopiComponent, PatternComponent],
  imports: [
    CommonModule,
    PatternRoutingModule
  ]
})
export class PatternModule { }
