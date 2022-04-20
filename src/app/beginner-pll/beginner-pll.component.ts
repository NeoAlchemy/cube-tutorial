import { Component, Directive, AfterViewInit, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { CubeComponent } from '.././cube/cube.component';
import { cubePNG, Masking } from 'sr-visualizer';


export interface DisplayElement {
  algorithm: string;
  notation: string;
}

const DISPLAY_DATA: DisplayElement[] = [
  { algorithm: 'PLL (H)a', notation: "M2 U M2 U2 M2 U M2" },
  { algorithm: 'PLL (Ub)', notation: "M2 U' M U2 M' U' M2" },
];

@Component({
  selector: 'app-beginner-pll',
  templateUrl: './beginner-pll.component.html',
  styleUrls: ['./beginner-pll.component.less']
})
export class BeginnerPllComponent implements AfterViewInit {

  ollDataArray = DISPLAY_DATA;
  displayedColumns: string[] = ['algorithm', 'image', 'notation']

  @ViewChildren(CubeComponent) cubes!: QueryList<CubeComponent>;

  ngAfterViewInit(): void {
    this.cubes.forEach((r) => {
      cubePNG(r.element.nativeElement, {
        view: 'plan',
        mask: Masking.LL,
        case: r.notation
      })
    })
  }

}
