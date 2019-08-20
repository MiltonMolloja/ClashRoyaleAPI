export class Item {
  iconUrls: Object;
  name: string;
  id: number;
  maxLevel: number;

  Item(
    iconUrls: Object,
    name: string,
    id: number,
    maxLevel: number
  ) {
    this.iconUrls = iconUrls;
    this.name = name;
    this.id = id;
    this.maxLevel = maxLevel;
  }
}
