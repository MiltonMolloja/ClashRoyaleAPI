import { Arena } from './arena';

export class ClanMember {
  arena: Arena;
  clanChestPoints: number;
  lastSeen: string;
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  trophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;

  ClanMember(
    arena: Arena,
    clanChestPoints: number,
    lastSeen: string,
    tag: string,
    name: string,
    role: string,
    expLevel: number,
    trophies: number,
    clanRank: number,
    previousClanRank: number,
    donations: number,
    donationsReceived: number
  ) {
    this.arena = arena;
    this.clanChestPoints = clanChestPoints;
    this.lastSeen = lastSeen;
    this.tag = tag;
    this.name = name;
    this.role = role;
    this.expLevel = expLevel;
    this.trophies = trophies;
    this.clanRank = clanRank;
    this.previousClanRank = previousClanRank;
    this.donations = donations;
    this.donationsReceived = donationsReceived;
  }
}
