import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './presentational/details/details.component';

@NgModule({
  declarations: [UserComponent, ProfileComponent, DetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
