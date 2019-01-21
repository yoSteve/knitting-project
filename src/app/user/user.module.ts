import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './presentational/details/details.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';

@NgModule({
  declarations: [UserComponent, ProfileComponent, DetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxsModule.forFeature([UserState])
  ]
})
export class UserModule { }
