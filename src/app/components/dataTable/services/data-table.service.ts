import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { CHARACTERS } from './mock-data';

@Injectable()
export class DataTableService {

  constructor() { }

  getCharacters(): Observable<any[]>{
    return Observable.of(CHARACTERS);
  }



  getColumns(): string[]{
    return ["name", "age", "species", "occupation1", "occupation2", "occupation3"]
  }

}
