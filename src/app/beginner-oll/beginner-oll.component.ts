import { Component, Directive, AfterViewInit, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { CubeComponent } from '.././cube/cube.component';
import { cubePNG, Masking } from 'sr-visualizer';

export interface DisplayElement {
  algorithm: string;
  notation: string;
}

const DISPLAY_DATA: DisplayElement[] = [
  {algorithm: 'oll-26', notation: "R U2 R' U' R U' R'"},
  {algorithm: 'oll-21', notation: "(R U2 R') (U' R U R') (U' R U' R')"},
];

@Component({
  selector: 'app-beginner-oll',
  templateUrl: './beginner-oll.component.html',
  styleUrls: ['./beginner-oll.component.less']
})
export class BeginnerOllComponent implements AfterViewInit {

  ollDataArray = DISPLAY_DATA;
  displayedColumns: string[] = ['algorithm', 'image', 'notation']

  @ViewChildren(CubeComponent) cubes!: QueryList<CubeComponent>;

  ngAfterViewInit(): void {
    this.cubes.forEach((r) => {
      cubePNG(r.element.nativeElement, {
        view: 'plan',
        mask: Masking.OLL,
        case: r.notation
      })
    })
  }

}
