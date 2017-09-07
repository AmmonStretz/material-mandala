import { World } from './world';

export interface Geometry {
  hit(x: number, y: number): boolean;
}