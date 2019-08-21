export class Arena {
  localizedShortName: string;
  name: string;
  localizedName: string;
  id: number;
  iconUrls: Object;

  Arena(
    localizedShortName: string,
    name: string,
    localizedName: string,
    id: number,
    iconUrls: Object,
  ) {
    this.localizedShortName = localizedShortName;
    this.name = name;
    this.localizedName = localizedName;
    this.id = id;
    this.iconUrls = iconUrls;
  }
}
