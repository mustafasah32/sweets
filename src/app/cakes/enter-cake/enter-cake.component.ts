import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Cake } from '../cake';
import { CakesService } from '../cakes-service/cakes-http.service';
import { ICakesService } from '../cakes-service/icakes-service';
import { ICake } from '../icake';

@Component({
  selector: 'app-enter-cake',
  templateUrl: './enter-cake.component.html',
  styleUrls: ['./enter-cake.component.css']
})
export class EnterCakeComponent implements OnInit {

  loading: boolean = false;

  showEnterCake: boolean = false;

  cake: Cake = new Cake();


  cakeNameInUse = false;



  @Output()
  entered = new EventEmitter<Cake>();

  constructor(
    private cakesService: CakesService) { }

  showDialog() {
    this.cakeNameInUse = false;
    this.showEnterCake = true;
  }

  async enterCake(): Promise<void> {
    this.loading = true;

    this.cakeNameInUse = false;
    if (await this.cakesService.enterCake(this.cake)) {
      this.entered.next(this.cake);
      this.showEnterCake=false;
    } else {
      this.cakeNameInUse = true;
    }
    this.loading = false;
  }

  ngOnInit(): void {
  }

}