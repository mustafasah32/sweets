import { Component, OnInit } from '@angular/core';
import { ICake } from '../icake';
import { CakesService } from '../cakes-service/cakes.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cakes:ICake[]=[];

  constructor(private cakesService:CakesService) { }

  async ngOnInit(): Promise<void> {
    this.cakes=await this.cakesService.getCakes();
  }

}
