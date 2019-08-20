import { LeagueSeasonResult } from './league-season-result';

export class PlayerLeagueStatistics {
  bestSeason: LeagueSeasonResult;
  currentSeason: LeagueSeasonResult;
  previousSeason: LeagueSeasonResult;

  PlayerLeagueStatistics(
    bestSeason: LeagueSeasonResult,
    currentSeason: LeagueSeasonResult,
    previousSeason: LeagueSeasonResult
  ){
    this.bestSeason = bestSeason;
    this.currentSeason = currentSeason;
    this.previousSeason = previousSeason;
  }
}
