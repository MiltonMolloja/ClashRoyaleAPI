export class Location {
  localizedName: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;

  Location
    (
      localizedName: string,
      id: number,
      name: string,
      isCountry: boolean,
      countryCode: string
    ) {
    this.localizedName = localizedName;
    this.id = id;
    this.name = name;
    this.isCountry = isCountry;
    this.countryCode = countryCode;
  }
}
