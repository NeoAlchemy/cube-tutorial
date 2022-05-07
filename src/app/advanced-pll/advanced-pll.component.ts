import { Component, Directive, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { CubeComponent } from '.././cube/cube.component';
import { cubePNG, Masking } from 'sr-visualizer';

export interface NotationElement {
  notation: string;

}

export interface DisplayElement {
  algorithm: string;
  notations: string[];
  arrows?: string;
  orient?: string;
}


const DISPLAY_DATA: DisplayElement[] = [
  { algorithm: "PLL 1 Aa",
    notations: [
      "x L2 D2 L' U' L D2 L' U L'",
      "y' x' L' U L' D2 L U' L' D2 L2",
      "r U r' U' r' F r2 U' r' U' r U r' F'"
    ],
    arrows: "",
    orient: "x'"
  },
  { algorithm: 'PLL 2 Ab', notations: [ "x' L2 D2 L U L' D2 L U' L", "y x L U' L D2 L' U L D2 L2", "U2 l' U' l' U l F' l2 U l U l' U' l F"], arrows: "", orient: "x"},

  { algorithm: 'PLL 3 F', notations: [ "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"], arrows: "U2U8,U8U2-black,U1U7,U7U1-black" },
  { algorithm: 'PLL 4 Ga', notations: [ "R2 U R' U R' U' R U' R2 U' D R' U R D'"], arrows: ""},
  { algorithm: 'PLL 5 Gb', notations: [ "R' U' R U D' R2 U R' U R U' R U' R2 D"], arrows: ""},
  { algorithm: 'PLL 6 Gc', notations: [ "R2 U' R U' R U R' U R2 U D' R U' R' D"], arrows: ""},
  { algorithm: 'PLL 7 Gd', notations: [ "R U R' U' D R2 U' R U' R' U R' U R2 D'"], arrows: "" },
  { algorithm: 'PLL 8 Ja', notations: [ "x R2 F R F' R U2 r' U r U2"], arrows: "", orient: "x'"},
  { algorithm: 'PLL 9 Jb', notations: [ "R U R' F' R U R' U' R' F R2 U' R'"], arrows: ""},
  { algorithm: 'PLL 10 Ra', notations: [ "R U' R' U' R U R D R' U' R D' R' U2 R'"], arrows: ""},
  { algorithm: 'PLL 11 Rb', notations: [ "R2 F R U R U' R' F' R U2 R' U2 R"], arrows: ""},
  { algorithm: 'PLL 12 T', notations: [ "R U R' U' R' F R2 U' R' U' R U R' F'"], arrows: ""},
  { algorithm: 'PLL 13 E', notations: [ "x' L' U L D' L' U' L D L' U' L D' L' U L D"], arrows: "", orient: "x"},
  { algorithm: 'PLL 14 Na', notations: [ "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"], arrows: ""},
  { algorithm: 'PLL 15 Nb', notations: [ "R' U R U' R' F' U' F R U R' F R' F' R U' R"], arrows: ""},
  { algorithm: 'PLL 16 V', notations: [ "R' U R' U' y R' F' R2 U' R' U R' F R F"], arrows: "", orient: "y'"},
  { algorithm: 'PLL 17 Y', notations: [ "F R U' R' U' R U R' F' R U R' U' R' F R F'"], arrows: ""},
  { algorithm: 'PLL 18 H', notations: [ "M2 U M2 U2 M2 U M2"], arrows: ""},
  { algorithm: 'PLL 19 Ua', notations: [ "M2 U M U2 M' U M2"], arrows: ""},
  { algorithm: 'PLL 20 Ub', notations: [ "M2 U' M U2 M' U' M2"], arrows: ""},
  { algorithm: 'PLL 21 Z', notations: [ "M' U M2 U M2 U M' U2 M2"], arrows: ""},
];

@Component({
  selector: 'app-advanced-pll',
  templateUrl: './advanced-pll.component.html',
  styleUrls: ['./advanced-pll.component.less']
})
export class AdvancedPllComponent implements AfterViewInit {

  ollDataArray = DISPLAY_DATA;
  displayedColumns: string[] = ['algorithm', 'image', 'notation']
  favoriteNotation: Map<string, number> = new Map();

  @ViewChildren(CubeComponent) cubes!: QueryList<CubeComponent>;
  @ViewChild("pll") pllElement!: ElementRef;

  ngAfterViewInit(): void {
    cubePNG(this.pllElement.nativeElement, {
      view: "plan",
      mask: Masking.LL,
      case: "M2 U' M U2 M' U' M2"
    })

    this.cubes.forEach((r) => {
      cubePNG(r.element.nativeElement, {
        view: 'plan',
        mask: Masking.LL,
        case: r.notation + r.orient,
        arrows: r.arrows
      })
    })
  }

  left(algorithm: string): void {
    this.baseMovement(algorithm, (i: number) => {
      return (i != 0) ? i - 1 : 0;
    })
  }

  right(algorithm: string, total: number): void {
    this.baseMovement(algorithm, (i: number) => {
      return (i < total) ? i + 1 : i;
    })
  }

  getLeftColor(algorithm: string): string {
    var i = this.favoriteNotation.get(algorithm);
    i = (i == null) ? 0 : i;
    return (i == 0) ? "disabled" : "primary";
  }

  getRightColor(algorithm: string, total: number): string {
    var i = this.favoriteNotation.get(algorithm);
    i = (i == null) ? 0 : i;
    return (i == total) ? "disabled" : "primary";
  }

  baseMovement(algorithm: string, uniqueFunctionality: Function) {
    var i = this.favoriteNotation.get(algorithm);
    i = (i == null) ? 0 : i;
    var newI = uniqueFunctionality(i);
    this.favoriteNotation.set(algorithm, newI);
  }

}
