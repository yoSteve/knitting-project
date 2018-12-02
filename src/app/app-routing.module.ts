import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landing-page/landing-page.module#LandingPageModule', pathMatch: 'full' },
  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
