import { Component, Input, OnInit } from '@angular/core';
import { ICake } from '../icake';

@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {

  cake!: ICake;

  showCake: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog(cake: ICake) {
    this.cake=cake;
    this.showCake = true;
  }

}
