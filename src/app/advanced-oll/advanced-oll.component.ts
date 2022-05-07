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
  { algorithm: 'OLL 8', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 9', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 10', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 11', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 12', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 13', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 14', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 15', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 16', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 17', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 18', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 19', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 20', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
  { algorithm: 'OLL 21', notations: [ "R U2 R2 F R F' U2 R' F R F'"]},
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
