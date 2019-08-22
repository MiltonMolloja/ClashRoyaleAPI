export class ClanWarParticipant {
  tag: string;
  name: string;
  cardsEarned: number;
  battlesPlayed: number;
  wins: number;
  collectionDayBattlesPlayed: number;
  numberOfBattles: number;

  ClanWarParticipant(
    tag: string,
    name: string,
    cardsEarned: number,
    battlesPlayed: number,
    wins: number,
    collectionDayBattlesPlayed: number,
    numberOfBattles: number,
  ) {
    this.tag = tag;
    this.name = name;
    this.cardsEarned = cardsEarned;
    this.battlesPlayed = battlesPlayed;
    this.wins = wins;
    this.collectionDayBattlesPlayed = collectionDayBattlesPlayed;
    this.numberOfBattles = numberOfBattles;
  }
}
