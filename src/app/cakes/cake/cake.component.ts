import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ICake } from '../icake';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input()
  cake!: ICake;

  @Output()
  displayCake=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
