import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICake } from '../icake';

@Injectable()
export abstract class CakesService {

  cakes: ICake[] = [];

  constructor() { }

  abstract getCakes():Promise<ICake[]> ;
}
