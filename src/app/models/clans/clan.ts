import { Location } from './location';
import { ClanMember } from './clan-member';

export class Clan {
  memberList: Array<ClanMember>;
  tag: string;
  requiredTrophies: number;
  badgeId: number;
  clanChestStatus: string;
  clanChestLevel: number;
  clanChestMaxLevel: number;
  clanScore: number;
  clanWarTrophies: number;
  donationsPerWeek: number;
  name: string;
  location: Location;
  type: string;
  members: number;
  description: string;
  clanChestPoints: number;
  badgeUrls: Object;

  Clan
  (
    memberList: Array<ClanMember>,
    tag: string,
    requiredTrophies: number,
    badgeId: number,
    clanChestStatus: string,
    clanChestLevel: number,
    clanChestMaxLevel: number,
    clanScore: number,
    clanWarTrophies: number,
    donationsPerWeek: number,
    name: string,
    location: Location,
    type: string,
    members: number,
    description: string,
    clanChestPoints: number,
    badgeUrls: Object
  ){
    this.memberList = memberList;
    this.tag = tag;
    this.requiredTrophies = requiredTrophies;
    this.badgeId = badgeId;
    this.clanChestStatus = clanChestStatus;
    this.clanChestLevel = clanChestLevel;
    this.clanChestMaxLevel = clanChestMaxLevel;
    this.clanScore = clanScore;
    this.clanWarTrophies = clanWarTrophies;
    this.donationsPerWeek = donationsPerWeek;
    this.name = name;
    this.location = location;
    this.type = type;
    this.members = members;
    this.description = description;
    this.clanChestPoints = clanChestPoints;
    this.badgeUrls = badgeUrls;
  }
}
