import { Injectable } from '@angular/core';
import { ICake } from '../icake';
import { HttpClient } from '@angular/common/http';
import { ICakesService } from './icakes-service';

@Injectable()
export class CakesMockService implements ICakesService {


  cakes: ICake[] = [];


  constructor(private http: HttpClient) { }

  async getCakes():Promise<ICake[]> {
    return this.http.get<any>('assets/cakes.json')
    .toPromise()
    .then(res => <ICake[]>res.data)
    .then(data => { return data; });
  }
}
