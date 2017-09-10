import { Point } from './classes/point';
import { WorldGeneratorService } from './world-generator.service';
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

  constructor(
    private el: ElementRef,
    private ranColor: RandomColorService,
    private worldGenerator: WorldGeneratorService
  ) { }

  @HostListener('click')
  click() {
    console.log(this.world.geos, this.world.colors);
  }

  public drawWorld(world: World) {
    this.world = world;
    for (let x = 0; x <= this.width / 2; x++) {
      for (let y = 0; y <= x; y++) {
        this.ctx.fillStyle = world.calcPixel(new Point(x, y));
        this.ctx.fillRect(x, y, 1, 1);
        this.ctx.fillRect(y, x, 1, 1);
        this.ctx.fillRect(this.width - x, y, 1, 1);
        this.ctx.fillRect(y, this.width - x, 1, 1);
        this.ctx.fillRect(x, this.height - y, 1, 1);
        this.ctx.fillRect(this.height - y, x, 1, 1);
        this.ctx.fillRect(this.height - y, this.width - x, 1, 1);
        this.ctx.fillRect(this.width - x, this.height - y, 1, 1);
      }
    }
  }

  ngAfterViewInit() {
    if (this.world) {
      this.drawWorld(this.world);
    } else {
      this.ranColor.getColorGroup().subscribe((res) => {
        this.drawWorld(
          this.worldGenerator.loadRandomWorld(
            this.width / 2 + 1,
            this.height / 2 + 1,
            res));
      });
    }
  }

}