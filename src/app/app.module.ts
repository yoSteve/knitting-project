import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProjectModule,
    AppRoutingModule // imported last to allow Module routes to be matched first
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
