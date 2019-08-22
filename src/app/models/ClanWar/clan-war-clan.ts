export class ClanWarClan {
  tag: string;
  clanScore: number;
  badgeId: number;
  crowns: number;
  name: string;
  participants: number;
  battlesPlayed: number;
  wins: number;

  ClanWarClan(
    tag: string,
    clanScore: number,
    badgeId: number,
    crowns: number,
    name: string,
    participants: number,
    battlesPlayed: number,
    wins: number,
  ) {
    this.tag = tag;
    this.clanScore = clanScore;
    this.badgeId = badgeId;
    this.crowns = crowns;
    this.name = name;
    this.participants = participants;
    this.battlesPlayed = battlesPlayed;
    this.wins = wins;
  }
}
