import { PlayerClan } from './player-clan';
import { PlayerItemLevel } from './player-item-level';

export class PlayerBattleData {
  clan: PlayerClan;
  cards: Array<PlayerItemLevel>;
  tag: string;
  name: string;
  startingTrophies: number;
  trophyChange: number;
  crowns: number;
  kingTowerHitPoints: number;
  princessTowersHitPoints: Array<number>;

  PlayerBattleData(
    clan: PlayerClan,
    cards: Array<PlayerItemLevel>,
    tag: string,
    name: string,
    startingTrophies: number,
    trophyChange: number,
    crowns: number,
    kingTowerHitPoints: number,
    princessTowersHitPoints: Array<number>
  ) {
    this.clan = clan;
    this.cards = cards;
    this.tag = tag;
    this.name = name;
    this.startingTrophies = startingTrophies;
    this.trophyChange = trophyChange;
    this.crowns = crowns;
    this.kingTowerHitPoints = kingTowerHitPoints;
    this.princessTowersHitPoints = princessTowersHitPoints;
  }
}
