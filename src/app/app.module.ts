import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakesMenuService } from './cakes/cakes-service/cakes-menu.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    CakesMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
