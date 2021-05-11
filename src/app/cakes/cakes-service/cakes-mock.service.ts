import { Injectable } from '@angular/core';
import { ICake } from '../icake';
import { HttpClient } from '@angular/common/http';
import { ICakesService } from './icakes-service';
import { Cake } from '../cake';

@Injectable()
export class CakesMockService implements ICakesService {


  cakes: ICake[] = [];


  constructor(private http: HttpClient) { }

  async getCakes(): Promise<ICake[]> {

    return new Promise<ICake[]>((rs, rj) => {

      setTimeout(() => {
        this.http.get<any>('assets/cakes.json')
          .toPromise()
          .then(res => {
            this.cakes = <ICake[]>res.data;
            return this.cakes;
          })
          .then(data => { rs(data); });
      }, 3000)
    });
  }

  async enterCake(cake: Cake): Promise<boolean> {
    return new Promise<boolean>((rs, rj) => {
      setTimeout(() => {
        const entered = this.cakes.every(d => d.name !== cake.name);
        rs(entered);
      }, 3000)
    });
  }
}
