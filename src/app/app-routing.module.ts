import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cakes', loadChildren: () => import('./cakes/cakes.module').then(m => m.CakesModule) },
  { path: '', redirectTo: '/cakes', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
