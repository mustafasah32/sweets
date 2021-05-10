import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

import { CakesRoutingModule } from './cakes-routing.module';
import { CakesComponent } from './cakes/cakes.component';
import { CakeComponent } from './cake/cake.component';
import { CakesMockService } from './cakes-service/cakes-mock.service';
import { CakesService } from './cakes-service/cakes.service';
import { HttpClientModule } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { ShowCakeComponent } from './show-cake/show-cake.component';


@NgModule({
  declarations: [
    ShowCakeComponent,
    CakesComponent,
    CakeComponent
  ],
  providers: [{provide:CakesService,useClass:CakesMockService}],
  imports: [
    RatingModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
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
