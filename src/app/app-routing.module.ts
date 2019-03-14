import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'projects',
    loadChildren: './project/project.module#ProjectModule',
  },
  {
    path: 'patterns',
    loadChildren: './pattern/pattern.module#PatternModule',
  },
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
