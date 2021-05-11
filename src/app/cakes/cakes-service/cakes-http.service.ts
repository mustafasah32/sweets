import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cake } from '../cake';
import { ICake } from '../icake';
import { ICakesService } from './icakes-service';

@Injectable()
export class CakesService implements ICakesService{

  cakes: ICake[] = [];

  constructor(private http: HttpClient) { }

  enterCake(cake: Cake): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getCakes():Promise<ICake[]> {
      return this.http.get<any>('assets/cakes.json')
      .toPromise()
      .then(res => <ICake[]>res.data)
      .then(data => { return data; });
  }
}
