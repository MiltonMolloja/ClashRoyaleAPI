export class PlayerClan {
  badgeId: number;
  tag: string;
  name: string;
  badgeUrls: Object;

  PlayerClan(
    badgeId: number,
    tag: string,
    name: string,
    badgeUrls: Object
  ) {
    this.badgeId = badgeId;
    this.tag = tag;
    this.name = name;
    this.badgeUrls = badgeUrls;
  }
}
