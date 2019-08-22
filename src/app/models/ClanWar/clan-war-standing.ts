import { ClanWarClan } from './clan-war-clan';

export class ClanWarStanding {
  trophyChange: number;
  clan: ClanWarClan;

  ClanWarStanding(
    trophyChange: number,
    clan: ClanWarClan
  ) {
    this.trophyChange = trophyChange;
    this.clan = clan;
  }
}
