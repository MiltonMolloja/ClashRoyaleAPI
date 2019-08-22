import { ClanWarStanding } from './clan-war-standing';
import { ClanWarParticipant } from './clan-war-participant';

export class ClanWarLogEntry {
  standings: Array<ClanWarStanding>;
  seasonId: number;
  participants: Array<ClanWarParticipant>;
  createdDate: string;

  ClanWarLogEntry(
    standings: Array<ClanWarStanding>,
    seasonId: number,
    participants: Array<ClanWarParticipant>,
    createdDate: string
  ) {
    this.standings = standings;
    this.seasonId = seasonId;
    this.participants = participants;
    this.createdDate = createdDate;
  }
}
