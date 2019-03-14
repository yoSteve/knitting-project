import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment as ENV } from '@environments/environment';
import { GlobalState } from './shared/state/app.state';
import { UserState } from './user/state/user.state';
import { LandingPageModule } from './landing-page/landing-page.module';
import { NotFoundModule } from './not-found/not-found.module';
// import { UserModule } from './user/user.module';
// import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([GlobalState, UserState], {developmentMode: !ENV.production}),
    NgxsLoggerPluginModule.forRoot(),
    CoreModule,
    LandingPageModule,
    NotFoundModule,
    // UserModule, // Lazy Loaded
    // ProjectModule, // Lazy Loaded
    AppRoutingModule // imported last to allow Feature Modules route matching
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
