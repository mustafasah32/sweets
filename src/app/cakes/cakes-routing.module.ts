import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakesComponent } from './cakes/cakes.component';

const routes: Routes = [{ path: '', component: CakesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakesRoutingModule { }
