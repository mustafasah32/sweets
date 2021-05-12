import { Component, OnInit, ViewChild } from '@angular/core';
import { ICake } from '../icake';
import { CakesService } from '../cakes-service/cakes-http.service';
import { CakesMenuService } from '../cakes-service/cakes-menu.service';
import { EnterCakeComponent } from '../enter-cake/enter-cake.component';
import { Cake } from '../cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cakes: ICake[] = [];
  showCake: boolean = false;
  cakeToDisplay!: ICake;
  httpError:boolean=false;

  @ViewChild(EnterCakeComponent, { static: true })
  insertCakeComponent!: EnterCakeComponent;

  constructor(
    private cakesService: CakesService,
    private cakesMenuService: CakesMenuService) { }

  async ngOnInit(): Promise<void> {
    this.cakesMenuService.showEnterCake$.subscribe(() => {
      this.insertCakeComponent.showDialog();

    })
    this.cakesService.getCakes().then((cakes)=>{this.cakes=cakes}).catch((e)=>{this.httpError=true});
  }

  cakeEntered(cakeEntered: Cake) {
    const cakesSaved = this.cakes;
    const cake=new Cake();
    cake.id=cakeEntered.id;
    cake.comment=cakeEntered.comment;
    cake.name=cakeEntered.name;
    cake.imageUrl=cakeEntered.imageUrl;
    cake.entered=true;
    cake.yumFactor=cakeEntered.yumFactor;
    cakesSaved.unshift(cake);
    this.cakes = [];
    setTimeout(() => {
      this.cakes = cakesSaved;
    }, 500)
  }

  showDialog(cake: ICake) {
    this.cakeToDisplay = cake;
    this.showCake = true;
  }

}
