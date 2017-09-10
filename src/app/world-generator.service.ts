import { Point } from './classes/point';
import { Color } from './classes/color';
import { World } from './classes/world';
import { Triangle } from './classes/triangle';
import { Sphere } from './classes/sphere';
import { Geometry } from './classes/geometry';
import { Injectable } from '@angular/core';

@Injectable()
export class WorldGeneratorService {

  public calcRandomGridPoint(gridX: number, gridY: number, width: number, height: number): Point {
    let x = Math.floor((Math.random() * (gridX))) * width / 2;
    let y = Math.floor((Math.random() * (gridY))) * height / 2;
    return new Point(x, y);
  }

  public calcGrid(width: number, height: number) {
    return [
      new Point(0, 0), new Point(width * 0.25, 0), new Point(width * 0.5, 0), new Point(width * 0.75, 0), new Point(width, 0),
      new Point(width * 0.25, height * 0.25), new Point(width * 0.5, height * 0.25), new Point(width, height * 0.25), new Point(width, height * 0.25),
      new Point(width * 0.5, height * 0.5), new Point(width * 0.75, height * 0.5), new Point(width, height * 0.5),
      new Point(width * 0.75, height * 0.75), new Point(width, height * 0.75),
      new Point(width, height)
    ];
  }

  public loadRandomWorld(width: number, height: number, colors: Color[]): World {
    let geos: Geometry[] = [];

    geos.push(Triangle.random(this.calcGrid(width, height)));
    geos.push(Triangle.random(this.calcGrid(width, height)));
    geos.push(Triangle.random(this.calcGrid(width, height)));
    geos.push(Sphere.random(this.calcGrid(width, height)));
    geos.push(Sphere.random(this.calcGrid(width, height)));
    geos.push(Sphere.random(this.calcGrid(width, height)));
    return new World(width, height, geos, colors);
  }

}