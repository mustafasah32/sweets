import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakesRoutingModule } from './cakes-routing.module';
import { CakesComponent } from './cakes/cakes.component';
import { CakeComponent } from './cake/cake.component';
import { CakesMockService } from './cakes-service/cakes-mock.service';
import { CakesService } from './cakes-service/cakes.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CakesComponent,
    CakeComponent
  ],
  providers: [{provide:CakesService,useClass:CakesMockService}],
  imports: [
    HttpClientModule,
    CommonModule,
    CakesRoutingModule
  ]
})
export class CakesModule { }
