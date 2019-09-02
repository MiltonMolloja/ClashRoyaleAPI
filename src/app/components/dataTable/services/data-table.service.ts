import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { CHARACTERS } from './mock-data';
import { ClanService } from 'src/app/services/clan.service';

@Injectable()
export class DataTableService {

  trophies: string= "https://cdn.statsroyale.com/images/clan-trophies.png";
  donations: string= "https://cdn.statsroyale.com/images/tournament-cards.png";
  tournament: string= "https://cdn.statsroyale.com/images/tournament-cards.png";
  clock: string= "https://cdn.statsroyale.com/images/clock.png";
  level: string= "https://cdn.statsroyale.com/images/level-big.png";

  battle: string= "https://cdn.statsroyale.com/images/battle-count.png";
  crown: string= "https://cdn.statsroyale.com/images/blue-crown.png";
  participants: string= "https://cdn.statsroyale.com/images/participants.png";


  constructor() { }

  getCharacters(array: Array<any>, stgg: string): Observable<any[]> {
    return Observable.of(array);
  }



  getColumns(table: string): any[] {
    switch (table) {
      case "clans":
        //return ["name", "clanScore", "members", "location"]
        return [[["name"],["clans"]], [["clanScore"],[this.trophies]], [["members"],[]], [["location"],["location"]]]
        break;
      case "clanMembers":
          return [[["name"],[]], [["expLevel"],[]], [["trophies"],[this.trophies]], [["donations"],[this.donations]], [["role"],[]], [["lastSeen"],[this.clock]]]
        break;
      case "standings":
          return [[["name"],["clans"]], [["clanScore"],[this.battle]], [["crowns"],[this.crown]], [["battlesPlayed"],[this.trophies]], [["wins"],[]], [["participants"],[this.participants]]]
        break;
      case "participants":
          return [[["name"],[]], [["battlesPlayed"],[this.battle]], [["wins"],[this.trophies]], [["cardsEarned"],[this.donations]]]
        break;
      case "clanClanWars":
          return [[["name"],["clans"]], [["clanScore"],[this.trophies]], [["crowns"],[this.crown]], [["wins"],[]], [["participants"],[this.participants]], [["battlesPlayed"],[this.battle]]]
        break;
      case "s":
        return ["s", "s", "s", "s"]
        break;
      default:
        return ["name", "name", "name", "name"]
        break;
    }

  }

}
