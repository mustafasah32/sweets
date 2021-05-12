import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CakesRoutingModule } from './cakes-routing.module';
import { CakesComponent } from './cakes/cakes.component';
import { CakeComponent } from './cake/cake.component';
import { CakesService } from './cakes-service/cakes-http.service';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ShowCakeComponent } from './show-cake/show-cake.component';
import { EnterCakeComponent } from './enter-cake/enter-cake.component';
import { CakesMockService } from './cakes-service/cakes-mock.service';

@NgModule({
  declarations: [
    EnterCakeComponent,
    ShowCakeComponent,
    CakesComponent,
    CakeComponent
  ],
  providers: [
    {
      provide: CakesService, useClass: CakesMockService
    }],
  imports: [
    RatingModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    CakesRoutingModule
  ]
})
export class CakesModule { }
