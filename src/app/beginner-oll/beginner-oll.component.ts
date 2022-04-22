import { Component, Directive, AfterViewInit, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { CubeComponent } from '.././cube/cube.component';
import { cubePNG, Masking } from 'sr-visualizer';

export interface DisplayElement {
  algorithm: string;
  notation: string;
}

const OELL_DISPLAY_DATA: DisplayElement[] = [
  {algorithm: 'Dot Shape', notation: "(F R U R' U' F') (f R U R' U' f')"},
  {algorithm: 'Line Shape', notation: "F R U R' U' F'"},
  {algorithm: 'L-Shape', notation: "f R U R' U' f'"},
];

const OLL_DISPLAY_DATA: DisplayElement[] = [
  {algorithm: 'Antisune', notation: "R U2 R' U' R U' R'"},
  {algorithm: 'H', notation: "R U R' U R U' R' U R U2 R'"},
  {algorithm: 'H', notation: "F (R U R' U') (R U R' U') (R U R' U') F'"},
  {algorithm: 'L', notation: "F R' F' r U R U' r'"},
  {algorithm: 'Pi', notation: "R U2 R2 U' R2 U' R2 U2 R"},
  {algorithm: 'Sune', notation: "R U R' U R U2 R'"},
  {algorithm: 'T', notation: "r U R' U' r' F R F'"},
  {algorithm: 'U', notation: "R2 D R' U2 R D' R' U2 R'"},
];

@Component({
  selector: 'app-beginner-oll',
  templateUrl: './beginner-oll.component.html',
  styleUrls: ['./beginner-oll.component.less']
})
export class BeginnerOllComponent implements AfterViewInit {

  oellDataArray = OELL_DISPLAY_DATA;
  ollDataArray = OLL_DISPLAY_DATA;
  displayedColumns: string[] = ['algorithm', 'image', 'notation']

  @ViewChildren(CubeComponent) cubes!: QueryList<CubeComponent>;

  ngAfterViewInit(): void {
    this.cubes.forEach((r) => {
      cubePNG(r.element.nativeElement, {
        view: 'plan',
        mask: (r.mask == "OLL") ? Masking.OLL : Masking.OELL,
        case: r.notation
      })
    })

  }

}
