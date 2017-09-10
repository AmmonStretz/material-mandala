import { Point } from './point';
import { World } from './world';

export interface Geometry {
  hit(p: Point): boolean;
}