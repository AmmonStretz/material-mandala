import { Geometry } from './geometry';
import { Sphere } from './sphere';
import { Triangle } from './triangle';

import { ColorGroup } from './color-group';
import { Color } from './color';
import { RandomColorService } from './../random-color.service';
class Point {
  constructor(public x: number, public y: number) { }
}

export class World {

  public ran_index = Math.floor(Math.random() * this.colors.length) + 1;

  public static calcRandomGridPoint(gridX: number, gridY: number, width: number, height: number): Point {
    let x = Math.floor((Math.random() * (gridX))) * width / 2;
    let y = Math.floor((Math.random() * (gridY))) * height / 2;
    return new Point(x, y);
  }

  public static loadRandomWorld(width: number, height: number, colors: Color[]): World {
    let geos: Geometry[] = [];
    for (let i = 0; i < 4; i++) {
      let p = this.calcRandomGridPoint(5, 5, width, height);
      let p1 = this.calcRandomGridPoint(5, 5, width, height);
      let p2 = this.calcRandomGridPoint(5, 5, width, height);
      let p3 = this.calcRandomGridPoint(5, 5, width, height);
      geos.push(new Sphere(p.x, p.y, 0.75 * width / Math.floor(Math.random() * 4) + 1));
      geos.push(new Triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y));
    }
    return new World(width, height, geos, colors);
  }

  constructor(
    public width: number,
    public height: number,
    public geos: Geometry[],
    public colors: Color[]) { }

  public calcPixel(x: number, y: number): string {
    return this.colors[this.countHits(x, y) % this.colors.length].hex;
  }

  private countHits(x: number, y: number) {
    let i = 0;
    this.geos.forEach(geo => {
      if (geo.hit(x, y)) {
        i++;
      }
    });
    return i;
  }
}