export class PlayerAchievementBadge {
  maxLevel: number;
  progress: number;
  target: number;
  level: number;
  name: string;

  PlayerAchievementBadge(
    maxLevel: number,
    progress: number,
    target: number,
    level: number,
    name: string
  ) {
    this.maxLevel = maxLevel;
    this.progress = progress;
    this.target = target;
    this.level = level;
    this.name = name;
  }
}
