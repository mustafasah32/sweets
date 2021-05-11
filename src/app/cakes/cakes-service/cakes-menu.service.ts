import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CakesMenuService {


  showEnterCake = new Subject();
  showEnterCake$ = this.showEnterCake.asObservable();

  constructor() { }
}
