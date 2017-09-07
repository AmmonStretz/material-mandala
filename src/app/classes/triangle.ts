import { Geometry } from './geometry';
import { World } from './world';

export class Triangle implements Geometry {

  private acx: number;
  private acy: number;
  private abx: number;
  private aby: number;

  constructor(private ax: number, private ay: number, private bx: number, private by: number, private cx: number, private cy: number) {
    this.abx = bx - ax;
    this.aby = by - ay;
    this.acx = cx - ax;
    this.acy = cy - ay;
  }

  hit(x: number, y: number): boolean {
    if(this.ax==this.bx&&this.ax==this.cx){
      return false;
    }
    if(this.ay==this.by&&this.ay==this.cy){
      return false;
    }
    let l = (this.aby * (x - this.ax) - this.abx * (y - this.ay)) / (this.aby * this.acx - this.abx * this.acy);
    if (l < 0 || l > 1) { return false; }
    // return true;
    let k = (x - this.ax - this.acx * l) / this.abx;
    return k >= 0 && k <= 1 && Math.floor(k + l) != 1;
  }
}