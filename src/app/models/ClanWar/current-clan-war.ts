import { ClanWarParticipant } from './clan-war-participant';
import { ClanWarClan } from './clan-war-clan';

export class CurrentClanWar {
  state: string;
  clan: ClanWarClan;
  participants: Array<ClanWarParticipant>;
  clans: Array<ClanWarClan>;
  collectionEndTime: string;
  warEndTime: string;

  CurrentClanWar(
    state: string,
    clan: ClanWarClan,
    participants: Array<ClanWarParticipant>,
    clans: Array<ClanWarClan>,
    collectionEndTime: string,
    warEndTime: string
  ) {
    this.state = state;
    this.clan = clan;
    this.participants = participants;
    this.clans = clans;
    this.collectionEndTime = collectionEndTime;
    this.warEndTime = warEndTime;
  }

}
