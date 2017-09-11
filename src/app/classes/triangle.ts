import { Point } from './point';
import { Geometry } from './geometry';
import { World } from './world';

export class Triangle implements Geometry {


  public static random(points: Point[]): Triangle {
    if (points.length < 3) {
      return null;
    }
    const A = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    const B = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    let i = points.length;
    while (i--) {
      const a = B.distance(points[i]);
      const b = A.distance(points[i]);
      const c = A.distance(B);
      const area = Math.sqrt((-a + b + c) * (a - b + c) * (a + b - c) * (a + b + c)) / (4);
      if (area <= 1) {
        console.log(A, B, points[i]);
        points.splice(i, 1);
      }
    }
    if (points.length === 0) {
      return null;
    }
    const C = points.splice(Math.floor(Math.random() * points.length), 1)[0];
    return new Triangle(A, B, C);
  }

  constructor(public a: Point, public b: Point, public c: Point) {
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