import { RandomColorService } from './random-color.service';
import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { World } from './classes/world';

@Directive({
  selector: 'canvas[mandala]'
})
export class MandalaDirective implements AfterViewInit {

  private ctx: CanvasRenderingContext2D = this.el.nativeElement.getContext('2d');
  @Input() private width = this.el.nativeElement.offsetWidth;
  @Input() private height = this.el.nativeElement.offsetHeight;
  @Input() private world: World;

  constructor(private el: ElementRef, private ranColor: RandomColorService) { }

  @HostListener('click')
  click() {
    console.log(this.world.geos, this.world.colors);
  }

  // private getRandomNumber(n: number[]) {
  //   let e = n.slice(0);
  //   e.splice(0, 1);
  //   console.log(e.length);
  // }

  public loadWorld(world: World) {
    this.world = world;
    for (let x = 0; x < this.width / 2 + 1; x++) {
      for (let y = 0; y < this.height / 2 + 1; y++) {
        this.ctx.fillStyle = world.calcPixel(x, y);
        this.ctx.fillRect(x, y, 1, 1);
        this.ctx.fillRect(this.width - x, y, 1, 1);
        this.ctx.fillRect(x, this.height - y, 1, 1);
        this.ctx.fillRect(this.width - x, this.height - y, 1, 1);
      }
    }
  }

  ngAfterViewInit() {
    if (this.world) {
      this.loadWorld(this.world);
    } else {
      this.ranColor.getColorGroup().subscribe((res)=>{
        this.loadWorld(
          World.loadRandomWorld(
            this.width / 2 + 1,
            this.height / 2 + 1,
            res));
      });
    }
  }

}