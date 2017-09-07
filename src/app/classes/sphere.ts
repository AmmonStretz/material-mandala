import { Geometry } from './geometry';

export class Sphere implements Geometry {

  constructor(public x: number, public y: number, public rad: number) { }

  hit(x: number, y: number): boolean {
    return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y)) < this.rad;
  }
}