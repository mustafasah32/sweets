import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICake } from '../icake';
import { ICakesService } from './icakes-service';

@Injectable()
export class CakesService implements ICakesService{

  cakes: ICake[] = [];

  constructor(private http: HttpClient) { }

  getCakes():Promise<ICake[]> {
      return this.http.get<any>('assets/cakes.json')
      .toPromise()
      .then(res => <ICake[]>res.data)
      .then(data => { return data; });
  }
}
