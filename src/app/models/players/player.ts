import { Item } from './item';
import { PlayerLeagueStatistics } from './player-league-statistics';
import { Arena } from '../clans/arena';
import { PlayerClan } from './player-clan';

export class Player {
  clan: PlayerClan;
  cards: List<PlayerItemLevel>;
  role: string;
  arena: Arena;
  wins: number;
  losses: number;
  badges: List<PlayerAchievementBadge>;
  totalDonations: number;
  leagueStatistics: PlayerLeagueStatistics;
  currentFavouriteCard: Item;
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  donations: number;
  donationsReceived: number;
  achievements: List<PlayerAchievementProgress>;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  currentDeck: List<PlayerItemLevel>;
  warDayWins: number;
  clanCardsCollected: number;
  starPoints: number;

  Player(
    clan: PlayerClan,
    cards: List<PlayerItemLevel>,
    role: string,
    arena: Arena,
    wins: number,
    losses: number,
    badges: List<PlayerAchievementBadge>,
    totalDonations: number,
    leagueStatistics: PlayerLeagueStatistics,
    currentFavouriteCard: Item;
    tag: string,
    name: string,
    expLevel: number,
    trophies: number,
    bestTrophies: number,
    donations: number,
    donationsReceived: number,
    achievements: List<PlayerAchievementProgress>,
    battleCount: number,
    threeCrownWins: number,
    challengeCardsWon: number,
    challengeMaxWins: number,
    tournamentCardsWon: number,
    tournamentBattleCount: number,
    currentDeck: List<PlayerItemLevel>,
    warDayWins: number,
    clanCardsCollected: number,
    starPoints: number,
  ) {
    this.clan = clan;
    this.cards = cards;
    this.role = role;
    this.arena = arena;
    this.wins = wins;
    this.losses = losses;
    this.badges = badges;
    this.totalDonations = totalDonations;
    this.leagueStatistics = leagueStatistics;
    this.currentFavouriteCard = currentFavouriteCard;
    this.tag = tag;
    this.name = name;
    this.expLevel = expLevel;
    this.trophies = trophies;
    this.bestTrophies = bestTrophies;
    this.donations = donations;
    this.donationsReceived = donationsReceived;
    this.achievements = achievements;
    this.battleCount = battleCount;
    this.threeCrownWins = threeCrownWins;
    this.challengeCardsWon = challengeCardsWon;
    this.challengeMaxWins = challengeMaxWins;
    this.tournamentCardsWon = tournamentCardsWon;
    this.tournamentBattleCount = tournamentBattleCount;
    this.currentDeck = currentDeck;
    this.warDayWins = warDayWins;
    this.clanCardsCollected = clanCardsCollected;
    this.starPoints = starPoints;
  }
}
