export class PlayerAchievementProgress {
  stars: number;
  value: number;
  name: string;
  target: number;
  info: string;
  completionInfo: string;

  PlayerAchievementProgress(
    stars: number,
    value: number,
    name: string,
    target: number,
    info: string,
    completionInfo: string
  ) {
    this.stars = stars;
    this.value = value;
    this.name = name;
    this.target = target;
    this.info = info;
    this.completionInfo = completionInfo;
  }
}
