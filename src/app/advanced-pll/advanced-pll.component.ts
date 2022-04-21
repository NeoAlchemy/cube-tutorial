import { Component, Directive, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { CubeComponent } from '.././cube/cube.component';
import { cubePNG, Masking } from 'sr-visualizer';


export interface DisplayElement {
  algorithm: string;
  notation: string;
  arrows?: string;
  orient?: string;
}

const DISPLAY_DATA: DisplayElement[] = [
  { algorithm: 'PLL 1 Aa', notation: "x L2 D2 L' U' L D2 L' U L'", arrows: "", orient: "x'" },
  { algorithm: 'PLL 2 Ab', notation: "x' L2 D2 L U L' D2 L U' L", arrows: "", orient: "x"  },
  { algorithm: 'PLL 3 F', notation: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", arrows: "U2U8,U8U2-black,U1U7,U7U1-black" },
  { algorithm: 'PLL 4 Ga', notation: "R2 U R' U R' U' R U' R2 U' D R' U R D'", arrows: ""  },
  { algorithm: 'PLL 5 Gb', notation: "R' U' R U D' R2 U R' U R U' R U' R2 D", arrows: "" },
  { algorithm: 'PLL 6 Gc', notation: "R2 U' R U' R U R' U R2 U D' R U' R' D", arrows: "" },
  { algorithm: 'PLL 7 Gd', notation: "R U R' U' D R2 U' R U' R' U R' U R2 D'", arrows: "" },
  { algorithm: 'PLL 8 Ja', notation: "x R2 F R F' R U2 r' U r U2", arrows: "", orient: "x'"  },
  { algorithm: 'PLL 9 Jb', notation: "R U R' F' R U R' U' R' F R2 U' R'", arrows: "" },
  { algorithm: 'PLL 10 Ra', notation: "R U' R' U' R U R D R' U' R D' R' U2 R'", arrows: "" },
  { algorithm: 'PLL 11 Rb', notation: "R2 F R U R U' R' F' R U2 R' U2 R", arrows: "" },
  { algorithm: 'PLL 12 T', notation: "R U R' U' R' F R2 U' R' U' R U R' F'", arrows: "" },
  { algorithm: 'PLL 13 E', notation: "x' L' U L D' L' U' L D L' U' L D' L' U L D", arrows: "", orient: "x" },
  { algorithm: 'PLL 14 Na', notation: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", arrows: "" },
  { algorithm: 'PLL 15 Nb', notation: "R' U R U' R' F' U' F R U R' F R' F' R U' R", arrows: "" },
  { algorithm: 'PLL 16 V', notation: "R' U R' U' y R' F' R2 U' R' U R' F R F", arrows: "", orient: "y'"  },
  { algorithm: 'PLL 17 Y', notation: "F R U' R' U' R U R' F' R U R' U' R' F R F'", arrows: "" },
  { algorithm: 'PLL 18 H', notation: "M2 U M2 U2 M2 U M2", arrows: "" },
  { algorithm: 'PLL 19 Ua', notation: "M2 U M U2 M' U M2", arrows: "" },
  { algorithm: 'PLL 20 Ub', notation: "M2 U' M U2 M' U' M2", arrows: "" },
  { algorithm: 'PLL 21 Z', notation: "M' U M2 U M2 U M' U2 M2", arrows: "" },
];

@Component({
  selector: 'app-advanced-pll',
  templateUrl: './advanced-pll.component.html',
  styleUrls: ['./advanced-pll.component.less']
})
export class AdvancedPllComponent implements AfterViewInit {

  ollDataArray = DISPLAY_DATA;
  displayedColumns: string[] = ['algorithm', 'image', 'notation']

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

}
