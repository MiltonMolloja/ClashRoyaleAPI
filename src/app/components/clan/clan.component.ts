import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ClanService } from 'src/app/services/clan.service';
import { Clan } from 'src/app/models/clans/clan';
import { ClanMember } from 'src/app/models/clans/clan-member';
import { ClanWarLogEntry } from 'src/app/models/ClanWar/clan-war-log-entry';
import { CurrentClanWar } from 'src/app/models/ClanWar/current-clan-war';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/players/player';
import { Chest } from 'src/app/models/players/chest';
import { Battle } from 'src/app/models/players/battle';
import { Item } from 'src/app/models/players/item';
import { ClanWarClan } from 'src/app/models/ClanWar/clan-war-clan';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {
  protected tag: string;  
  now = moment().format('LLLL');
  clan: Clan;
  clans: Array<Clan>;
  player: Player;
  players: Array<Player>;
  chest: Chest;
  chests: Array<Chest>;
  clanMember: ClanMember
  clanMembers: Array<ClanMember>;
  clanWarLogEntry: ClanWarLogEntry;
  currentClanWar: CurrentClanWar;
  battle: Battle;
  battles: Array<Battle>;
  name: string;
  locationId: number;
  minMembers: number;
  maxMembers: number;
  minScore: number;
  limit: number;
  after: string;
  before: string;
  clanTag: string;
  playerTag: string;
  search: string;

  ClanWarLog: Array<ClanWarLogEntry>;


  urlImgInit: string;
  urlImgFinis: string;
  dateNow: Date;

  clanMembersString: string;

  constructor(private clanService: ClanService, private playerService: PlayerService, private cdRef: ChangeDetectorRef, private route: ActivatedRoute) {
    //this.ngAfterViewChecked();
    

    this.clanMembersString = "clanMembers"
    this.urlImgInit = "https://statsroyale.com/images/clanwars/";
    this.urlImgFinis = "_gold1.png";
    this.clan = new Clan();
    this.clans = new Array<Clan>();
    this.player = new Player();
    this.players = new Array<Player>();
    this.chest = new Chest();
    this.chests = new Array<Chest>();
    this.clanMember = new ClanMember();
    this.clanMembers = new Array<ClanMember>();
    this.clanWarLogEntry = new ClanWarLogEntry();
    this.currentClanWar = new CurrentClanWar();
    this.battle = new Battle();
    this.battles = new Array<Battle>();
    this.search = "";


    this.ClanWarLog = new Array<ClanWarLogEntry>();

    //this.name = null;
    this.locationId = null;
    this.minMembers = null;
    this.maxMembers = null;
    this.minScore = null;
    this.limit = null;
    this.after = null;
    this.before = null;
    this.clanTag = null;
    this.playerTag = null;
    //this.name = "xxxx";
    this.minMembers = 2;
    this.maxMembers = 10;

    this.route.params.subscribe( params => {
      this.tag = params.tag;
      this.clanTag = params.tag;
    });    

    //this.clanTag = "#YQRUP2UQ";
    
    //this.playerTag = "#PRRYRC98J";

    //this.limit = 10;
    //this.before = "asd";
    this.getClanAll();
    this.getClanTag();
    this.getClanMember();
    this.getClanWarLog();
    this.getClanCurrentWar();
    //this.getPlayerTag();
    //this.getPlayerUpComingChests();
    //this.getPlayerBattleLog();
    //this.clans = this.getClanAll();
    ////console.log(this.getClanCurrentWarString("#YV2C8YC9"));
    //this.ngAfterViewChecked();
  }


  ngOnInit() {
    this.route.params.subscribe( params => {
      this.tag = params.tag;
      this.clanTag = params.tag;
    });    
    
  }

  getCharacters(): Observable<any[]> {
    return this.clanService.getAll();
  }

  ngAfterViewChecked() {
    this.dateNow = new Date();
    this.cdRef.detectChanges();
  }

  getClanAll() {
    this.clans = new Array<Clan>();
    this.clanService.getAll(this.name, this.locationId, this.minMembers, this.maxMembers, this.minScore, this.limit, this.after, this.before)
      .subscribe(response => {
        response.items.forEach(element => {
          var clanTemp = new Clan();
          Object.assign(clanTemp, element);
          this.clans.push(clanTemp);
        });
        //console.log(this.clans);
      }
        , error => console.log(error)
      );
  }

  getClanTag() {
    this.clanService.getTag(this.clanTag)
      .subscribe((response: Clan) => {
        this.clan = new Clan();
        this.clan = response;
        //console.log(this.clan);
      }
        , error => console.log(error)
      );
  }


  getClanMember() {
    this.clanMembers = new Array<ClanMember>();
    this.clanService.getMembers(this.clanTag, this.limit, this.after, this.before)
      .subscribe((response) => {
        //this.clanMembers = response.items;
        ////console.log("this.clanMembers");
        response.items.forEach(element => {
          this.clanMembers.push(element);
        });
        //console.log(this.clanMembers);
      }
        , error => console.log(error)
      );
  }

  getClanWarLog() {
    this.ClanWarLog = new Array<ClanWarLogEntry>();
    this.clanService.getWarLog(this.clanTag, this.limit, this.after, this.before)
      .subscribe((response) => {
        this.ClanWarLog = response.items;
        //console.log(this.ClanWarLog);
      }
        , error => console.log(error)
      );
  }

  getClanCurrentWar() {
    this.currentClanWar = new CurrentClanWar;
    this.currentClanWar.clan = new ClanWarClan();
    this.clanService.getCurrentWar(this.clanTag)
      .subscribe((response) => {
        this.currentClanWar = new CurrentClanWar;
        this.currentClanWar = response;
        this.currentClanWar.clan = response.clan;
        //console.log(this.currentClanWar);
      }
        , error => console.log(error)
      );
  }


  getPlayerTag() {
    this.playerService.getTag(this.playerTag)
      .subscribe((response: Player) => {
        this.player = new Player();
        this.player = response;
        //console.log(this.player);
      }
        , error => console.log(error)
      );
  }

  getPlayerUpComingChests() {
    this.playerService.getUpComingChests(this.playerTag)
      .subscribe((response: Array<Chest>) => {
        this.chests = new Array<Chest>();
        this.chests = response;
        //console.log(this.chests);
      }
        , error => console.log(error)
      );
  }

  getPlayerBattleLog() {
    this.playerService.getBattleLog(this.playerTag)
      .subscribe((response: Array<Battle>) => {
        this.battles = new Array<Battle>();
        this.battles = response;
        //console.log(this.battles);
      }
        , error => console.log(error)
      );
  }

  selecClan(
    clan: Clan,
    limit?: number,
    after?: string,
    before?: string
  ) {
    this.clan = clan;
    this.clanTag = clan.tag;
    this.limit = limit;
    this.after = after;
    this.before = before;
    //console.log(this.limit);
  }

  selecClanWarLogEntry(clanWarLogEntry: ClanWarLogEntry) {
    this.clanWarLogEntry = clanWarLogEntry;
  }

  setTabla() {
    if (this.clanMembersString != "clans") {
      this.clanMembersString = "clans";
    } else {
      this.clanMembersString = "clanMembers";
    }


  }

  setSearch(search: string) {
    this.clanMembers = new Array<ClanMember>();
    this.clanService.getMembers(this.clanTag, this.limit, this.after, this.before)
      .subscribe((response) => {
        if (search != 'all') {
          response.items.forEach(element => {
            //console.log(element.role === search);
            if (element.role === search) {
              this.clanMembers.push(element);
            }
          });
        } else {
          this.clanMembers = response.items;
        }
        //console.log(this.clanMembers);
      }
        , error => console.log(error)
      );
  }

  setSearch3(search: string) {
    var clanMembersTemp = new Array<ClanMember>();
    this.getClanMember();
    if (search != "all") {
      this.clanMembers.forEach(element => {
        if (element.role != search) {
          clanMembersTemp.push(element);
        }
      });
      this.clanMembers = clanMembersTemp;
    }
  }

  //lastSeenFormat() : string{
  lastSeenHoras(lastSeen: string): string {
    var cadena = "";
    var fechaLastSeen = moment(new Date(lastSeen));
    //var fechaLastSeen = moment(new Date("2019-08-07:05:33"));
    var fechaActual = moment(new Date());
    var days = fechaActual.diff(fechaLastSeen, 'days');
    var hours = fechaActual.diff(fechaLastSeen, 'hours');

    if (days === 0) {
      if (hours === 0) {
        cadena = "Hace Menos de una hora";
      } else {
        cadena = "Hace " + hours + " horas";
      }
    } else {
      cadena = "Hace " + days + " dias con " + (hours - (days * 24)) + " horas";
    }
    return cadena;
  }
}
