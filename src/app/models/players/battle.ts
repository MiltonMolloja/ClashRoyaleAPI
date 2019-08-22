import { GameMode } from './game-mode';
import { Arena } from './../clans/arena';
import { PlayerBattleData } from './player-battle-data';

export class Battle {
  gameMode: GameMode;
  arena: Arena;
  opponent: Array<PlayerBattleData>;
  type: string;
  deckSelection: string;
  team: Array<PlayerBattleData>;
  challengeWinCountBefore: number;
  battleTime: string;
  challengeId: number;
  tournamentTag: string;
  challengeTitle: string;
  replayTag: string;
  isLadderTournament: boolean;

  Battle(
    gameMode: GameMode,
    arena: Arena,
    opponent: Array<PlayerBattleData>,
    type: string,
    deckSelection: string,
    team: Array<PlayerBattleData>,
    challengeWinCountBefore: number,
    battleTime: string,
    challengeId: number,
    tournamentTag: string,
    challengeTitle: string,
    replayTag: string,
    isLadderTournament: boolean
  ) {
    this.gameMode = gameMode;
    this.arena = arena;
    this.opponent = opponent;
    this.type = type;
    this.deckSelection = deckSelection;
    this.team = team;
    this.challengeWinCountBefore = challengeWinCountBefore;
    this.battleTime = battleTime;
    this.challengeId = challengeId;
    this.tournamentTag = tournamentTag;
    this.challengeTitle = challengeTitle;
    this.replayTag = replayTag;
    this.isLadderTournament = isLadderTournament;
  }
}
