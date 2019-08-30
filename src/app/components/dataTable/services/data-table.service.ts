import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { CHARACTERS } from './mock-data';
import { ClanService } from 'src/app/services/clan.service';

@Injectable()
export class DataTableService {

  constructor() { }

  getCharacters(array:Array<any>, stgg:string): Observable<any[]>{
    console.log(array);
    console.log(stgg);
    return Observable.of(array);
  }



  getColumns(): string[]{
    return ["name", "clanScore", "members", "location"]
  }

}
