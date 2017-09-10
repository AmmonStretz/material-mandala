import { Point } from './point';
import { Geometry } from './geometry';

export class Sphere implements Geometry {

  public static random(points: Point[]): Sphere {
    const c = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    const r = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    return new Sphere(c, Math.sqrt((r.x - c.x) * (r.x - c.x) + (r.y - c.y) * (r.y - c.y)));
  }

  constructor(public p: Point, public rad: number) { }

  hit(p: Point): boolean {
    return Math.sqrt((this.p.x - p.x) * (this.p.x - p.x) + (this.p.y - p.y) * (this.p.y - p.y)) < this.rad;
  }
}