import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectModule } from './project/project.module';
import { environment as ENV } from '@environments/environment';
import { GlobalState } from './shared/state/app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([GlobalState], {developmentMode: !ENV.production}),
    NgxsLoggerPluginModule.forRoot(),
    CoreModule,
    ProjectModule,
    AppRoutingModule // imported last to allow Feature Modules route matching
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
