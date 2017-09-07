import { Component, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { World } from './classes/world';
import { Geometry } from './classes/geometry';
import { Sphere } from './classes/sphere';
import { Triangle } from './classes/triangle';
import { MandalaDirective } from './mandala.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(MandalaDirective) canvasRef: QueryList<MandalaDirective>;


  constructor(){

  }
  ngAfterViewInit() {
    // let mandalas = this.canvasRef.toArray();
    // setInterval(() => {
    //   mandalas[Math.floor((Math.random()*mandalas.length))].loadRandomWorld();
    // },1000);
  }
}
