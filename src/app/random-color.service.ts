import { Injectable } from '@angular/core';
import { ColorGroup } from './classes/color-group';
import { Color } from './classes/color';


import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

class ColorStack {
  constructor(
    public prim: Color[],
    public sec: Color[]
  ){}
}

@Injectable()
export class RandomColorService {
  private colors: ColorStack[];

  constructor(private http: Http) { }

  public loadColors() {
    this.http.get('./assets/colors.json').map((res) => res.json());
  }

  public getColorGroup(): Observable<Color[]> {
    let col: Observable<ColorStack[]>;
    if (this.colors) {
      col = Observable.create((obs: Observer<ColorStack[]>) => {
        obs.next(this.colors);
        obs.complete();
      });
    } else {
      col = this.http.get('./assets/colors.json')
      .map((res) => {
        return res.json();
      }).map((res) => {
        const c:ColorStack[] = [];
        res.forEach(el => {
          const stackPrim: Color[] = [];
          el.prim.forEach(c => {
            stackPrim.push(Color.fromHex(c));
          });
          const stackSec: Color[] = [];
          el.sec.forEach(c => {
            stackSec.push(Color.fromHex(c));
          });
          c.push(new ColorStack(stackPrim, stackSec));
        });
        this.colors = c;
        return c;
      });
    }
    return col.map((res) => {
      const c: Color[] = [];
      const r1 = Math.floor(Math.random() * this.colors.length);
      c.push(this.colors[r1].prim[this.colors[r1].prim.length - 2]);
      c.push(this.colors[r1].prim[this.colors[r1].prim.length / 2]);
      c.push(this.colors[r1].prim[2]);
      c.push(this.colors[(r1 + this.colors.length - 1) % this.colors.length].prim[5]);
      return c;
    });
  }
}