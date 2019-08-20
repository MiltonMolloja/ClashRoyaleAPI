export class PlayerItemLevel {
  id: number;
  count: number;
  level: number;
  starLevel: number;
  name: string;
  maxLevel: number;
  iconUrls: object;

  PlayerItemLevel(
    id: number,
    count: number,
    level: number,
    starLevel: number,
    name: string,
    maxLevel: number,
    iconUrls: object
  ) {
    this.id = id;
    this.count = count;
    this.level = level;
    this.starLevel = starLevel;
    this.name = name;
    this.maxLevel = maxLevel;
    this.iconUrls = iconUrls;
  }

}
