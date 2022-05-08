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
  { algorithm: 'OLL 28', notations: [ ""]},
  { algorithm: 'OLL 29', notations: [ ""]},
  { algorithm: 'OLL 30', notations: [ ""]},
  { algorithm: 'OLL 31', notations: [ ""]},
  { algorithm: 'OLL 32', notations: [ ""]},
  { algorithm: 'OLL 33', notations: [ ""]},
  { algorithm: 'OLL 34', notations: [ ""]},
  { algorithm: 'OLL 35', notations: [ ""]},
  { algorithm: 'OLL 36', notations: [ ""]},
  { algorithm: 'OLL 37', notations: [ ""]},
  { algorithm: 'OLL 38', notations: [ ""]},
  { algorithm: 'OLL 39', notations: [ ""]},
  { algorithm: 'OLL 40', notations: [ ""]},
  { algorithm: 'OLL 41', notations: [ ""]},
  { algorithm: 'OLL 42', notations: [ ""]},
  { algorithm: 'OLL 43', notations: [ ""]},
  { algorithm: 'OLL 44', notations: [ ""]},
  { algorithm: 'OLL 45', notations: [ ""]},
  { algorithm: 'OLL 46', notations: [ ""]},
  { algorithm: 'OLL 47', notations: [ ""]},
  { algorithm: 'OLL 48', notations: [ ""]},
  { algorithm: 'OLL 49', notations: [ ""]},
  { algorithm: 'OLL 50', notations: [ ""]},
  { algorithm: 'OLL 51', notations: [ ""]},
  { algorithm: 'OLL 52', notations: [ ""]},
  { algorithm: 'OLL 53', notations: [ ""]},
  { algorithm: 'OLL 54', notations: [ ""]},
  { algorithm: 'OLL 55', notations: [ ""]},
  { algorithm: 'OLL 56', notations: [ ""]},
  { algorithm: 'OLL 57', notations: [ ""]},
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
