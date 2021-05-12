import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cake } from '../cake';
import { ICake } from '../icake';
import { ICakesService } from './icakes-service';

@Injectable()
export class CakesService implements ICakesService {

  cakes: ICake[] = [];

  constructor(private http: HttpClient) { }

  enterCake(cake: Cake): Promise<string> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<string>('/api/enterCake', JSON.stringify(cake), httpOptions)
      .toPromise()
      .then(res => res);
  }

  getCakes(): Promise<ICake[]> {
    return this.http.get<any>('/api/getCakes')
      .toPromise()
      .then(res => <ICake[]>res)
      .then(data => { return data; });
  }
}
