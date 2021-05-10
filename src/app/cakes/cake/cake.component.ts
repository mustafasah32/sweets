import { Component, Input, OnInit } from '@angular/core';
import { ICake } from '../icake';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input()
  cake!: ICake;

  constructor() { }

  ngOnInit(): void {
  }

}
