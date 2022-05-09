import { Component, Directive, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { CubeComponent } from '.././cube/cube.component';
import { cubePNG, Masking } from 'sr-visualizer';

export interface NotationElement {
  notation: string;

}

export interface DisplayElement {
  algorithm: string;
  notations: string[];
  orient?: string;
}


const DISPLAY_DATA: DisplayElement[] = [
  { algorithm: 'OLL 1', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 2', notations: [ "r U r' U2 r U2 R' U2 R U' r'"]},
  { algorithm: 'OLL 3', notations: [ "r' R2 U R' U r U2 r' U M'"]},
  { algorithm: 'OLL 4', notations: [ "M U' r U2 r' U' R U' R' M'"]},
  { algorithm: 'OLL 5', notations: [ "l' U2 L U L' U l"]},
  { algorithm: 'OLL 6', notations: [ "r U2 R' U' R U' r'"]},
  { algorithm: 'OLL 7', notations: [ "r U R' U R U2 r'"]},
  { algorithm: 'OLL 8', notations: [ "l' U' L U' L' U2 l"]},
  { algorithm: 'OLL 9', notations: [ "R U R' U' R' F R2 U R' U' F'"]},
  { algorithm: 'OLL 10', notations: [ "R U R' U R' F R F' R U2 R'"]},
  { algorithm: 'OLL 11', notations: [ "r U R' U R' F R F' R U2 r'"]},
  { algorithm: 'OLL 12', notations: [ "M' R' U' R U' R' U2 R U' R r'"]},
  { algorithm: 'OLL 13', notations: [ "F U R U' R2 F' R U R U' R'"]},
  { algorithm: 'OLL 14', notations: [ "R' F R U R' F' R F U' F'"]},
  { algorithm: 'OLL 15', notations: [ "l' U' l L' U' L U l' U l"]},
  { algorithm: 'OLL 16', notations: [ "r U r' R U R' U' r U' r'"]},
  { algorithm: 'OLL 17', notations: [ "F R' F' R2 r' U R U' R' U' M'"]},
  { algorithm: 'OLL 18', notations: [ "r U R' U R U2 r2 U' R U' R' U2 r"]},
  { algorithm: 'OLL 19', notations: [ "r' R U R U R' U' M' R' F R F'"]},
  { algorithm: 'OLL 20', notations: [ "r U R' U' M2 U R U' R' U' M'"]},
  { algorithm: 'OLL 21', notations: [ "R U2 R' U' R U R' U' R U' R'"]},
  { algorithm: 'OLL 22', notations: [ "R U2 R2 U' R2 U' R2 U2 R"]},
  { algorithm: 'OLL 23', notations: [ "R2 D' R U2 R' D R U2 R"]},
  { algorithm: 'OLL 24', notations: [ "r U R' U' r' F R F'"]},
  { algorithm: 'OLL 25', notations: [ "F' r U R' U' r' F R"]},
  { algorithm: 'OLL 26', notations: [ "R U2 R' U' R U' R'"]},
  { algorithm: 'OLL 27', notations: [ "R U R' U R U2 R'"]},
  { algorithm: 'OLL 28', notations: [ "r U R' U' r' R U R U' R'"]},
  { algorithm: 'OLL 29', notations: [ "R U R' U' R U' R' F' U' F R U R'"]},
  { algorithm: 'OLL 30', notations: [ "F R' F R2 U' R' U' R U R' F2"]},
  { algorithm: 'OLL 31', notations: [ "R' U' F U R U' R' F' R"]},
  { algorithm: 'OLL 32', notations: [ "L U F' U' L' U L F L'"]},
  { algorithm: 'OLL 33', notations: [ "R U R' U' R' F R F'"]},
  { algorithm: 'OLL 34', notations: [ "R U R2 U' R' F R U R U' F'"]},
  { algorithm: 'OLL 35', notations: [ "R U2 R2 F R F' R U2 R'"]},
  { algorithm: 'OLL 36', notations: [ "L' U' L U' L' U L U L F' L' F"]},
  { algorithm: 'OLL 37', notations: [ "F R' F' R U R U' R'"]},
  { algorithm: 'OLL 38', notations: [ "R U R' U R U' R' U' R' F R F'"]},
  { algorithm: 'OLL 39', notations: [ "L F' L' U' L U F U' L'"]},
  { algorithm: 'OLL 40', notations: [ "R' F R U R' U' F' U R"]},
  { algorithm: 'OLL 41', notations: [ "R U R' U R U2 R' F R U R' U' F'"]},
  { algorithm: 'OLL 42', notations: [ "R' U' R U' R' U2 R F R U R' U' F'"]},
  { algorithm: 'OLL 43', notations: [ "F' U' L' U L F"]},
  { algorithm: 'OLL 44', notations: [ "F U R U' R' F'"]},
  { algorithm: 'OLL 45', notations: [ "F R U R' U' F'"]},
  { algorithm: 'OLL 46', notations: [ "R' U' R' F R F' U R"]},
  { algorithm: 'OLL 47', notations: [ "R' U' R' F R F' R' F R F' U R"]},
  { algorithm: 'OLL 48', notations: [ "F R U R' U' R U R' U' F'"]},
  { algorithm: 'OLL 49', notations: [ "r U' r2 U r2 U r2 U' r"]},
  { algorithm: 'OLL 50', notations: [ "r' U r2 U' r2 U' r2 U r'"]},
  { algorithm: 'OLL 51', notations: [ "F U R U' R' U R U' R' F'"]},
  { algorithm: 'OLL 52', notations: [ "R U R' U R U' B U' B' R'"]},
  { algorithm: 'OLL 53', notations: [ "l' U2 L U L' U' L U L' U l"]},
  { algorithm: 'OLL 54', notations: [ "r U2 R' U' R U R' U' R U' r'"]},
  { algorithm: 'OLL 55', notations: [ "R' F R U R U' R2 F' R2 U' R' U R U R'"]},
  { algorithm: 'OLL 56', notations: [ "r' U' r U' R' U R U' R' U R r' U r"]},
  { algorithm: 'OLL 57', notations: [ "R U R' U' M' U R U' r'"]},
]

@Component({
  selector: 'app-advanced-oll',
  templateUrl: './advanced-oll.component.html',
  styleUrls: ['./advanced-oll.component.less']
})
export class AdvancedOllComponent implements AfterViewInit {

  ollDataArray = DISPLAY_DATA;
  displayedColumns: string[] = ['algorithm', 'image', 'notation']
  favoriteNotation: Map<string, number> = new Map();

  @ViewChildren(CubeComponent) cubes!: QueryList<CubeComponent>;
  @ViewChild("oll") ollElement!: ElementRef;

  ngAfterViewInit(): void {
    cubePNG(this.ollElement.nativeElement, {
      view: "",
      mask: Masking.OLL,
      case: "R U2 R' U' R U' R'"
    })

    this.cubes.forEach((r) => {
      cubePNG(r.element.nativeElement, {
        view: 'plan',
        mask: Masking.OLL,
        case: r.notation + r.orient
      })
    })
  }

}
