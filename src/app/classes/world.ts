import { Point } from './point';
import { Geometry } from './geometry';
import { Sphere } from './sphere';
import { Triangle } from './triangle';

import { ColorGroup } from './color-group';
import { Color } from './color';
import { RandomColorService } from './../random-color.service';

export class World {

  constructor(
    public width: number,
    public height: number,
    public geos: Geometry[],
    public colors: Color[]) { }

  public calcPixel(p: Point): string {
    return this.colors[this.countHits(p) % this.colors.length].hex;
  }

  private countHits(p: Point) {
    let i = 0;
    this.geos.forEach(geo => {
      if (geo.hit(p)) {
        i++;
      }
    });
    return i;
  }
}