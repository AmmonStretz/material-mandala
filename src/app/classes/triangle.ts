import { Point } from './point';
import { Geometry } from './geometry';
import { World } from './world';

export class Triangle implements Geometry {


  public static random(points: Point[]): Triangle {
    if (points.length < 3) {
      return null;
    }
    const a = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    const b = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    let i = points.length;
    while (i--) {
      if ((points[i].x - a.x) / (b.x - a.x) === (points[i].y - a.y) / (b.y - a.y)) {
        points.splice(i, 1);
      }
    }
    if (points.length === 0) {
      return null;
    }
    const c = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    return new Triangle(a, b, c);
  }

  constructor(private a: Point, private b: Point, private c: Point) {
  }

  public sign(p: Point, b: Point, c: Point): number {
    return (p.x - c.x) * (b.y - c.y) - (b.x - c.x) * (p.y - c.y);
  }

  hit(p: Point) {
    let b1: boolean;
    let b2: boolean;
    let b3: boolean;

    b1 = this.sign(p, this.a, this.b) < 0.0;
    b2 = this.sign(p, this.b, this.c) < 0.0;
    b3 = this.sign(p, this.c, this.a) < 0.0;

    return ((b1 === b2) && (b2 === b3));
  }
}