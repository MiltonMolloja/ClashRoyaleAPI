export class LeagueSeasonResult {
  rank: number;
  trophies: number;
  bestTrophies: number;
  id: string;

  LeagueSeasonResult(
    rank: number,
    trophies: number,
    bestTrophies: number,
    id: string
  ){
    this.rank = rank;
    this.trophies = trophies;
    this.bestTrophies = bestTrophies;
    this.id = id;
  }
}
