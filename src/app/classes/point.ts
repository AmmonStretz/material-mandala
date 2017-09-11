export class Point {

  constructor(
    public x: number,
    public y: number
  ) { }

  public distance(p: Point) {
    return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
  }
}
