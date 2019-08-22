export class Chest {
  name: string;
  index: number;
  iconUrls: object;

  Chest(
    name: string,
    index: number,
    iconUrls: object,
  ) {
    this.name = name;
    this.index = index;
    this.iconUrls = iconUrls;
  }

}
