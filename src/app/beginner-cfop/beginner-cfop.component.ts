import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { cubePNG, Masking, Face } from 'sr-visualizer';

@Component({
  selector: 'app-beginner-cfop',
  templateUrl: './beginner-cfop.component.html',
  styleUrls: ['./beginner-cfop.component.less']
})
export class BeginnerCfopComponent implements AfterViewInit {

  @ViewChild("cross") crossElement!: ElementRef;
  @ViewChild("f2l") f2lElement!: ElementRef;
  @ViewChild("oll") ollElement!: ElementRef;
  @ViewChild("pll") pllElement!: ElementRef;

  ngAfterViewInit(): void {
    cubePNG(this.crossElement.nativeElement, {
      view: "plan",
      mask: Masking.CROSS,
      maskAlg: "x2",
      colorScheme: {
        [Face.U]: 'white',
        [Face.R]: 'orange',
        [Face.F]: 'green',
        [Face.D]: 'yellow',
        [Face.L]: 'red',
        [Face.B]: 'blue'
      }
    })

    cubePNG(this.f2lElement.nativeElement, {
      view: "",
      mask: Masking.F2L3,
      maskAlg: ""
    })

    cubePNG(this.ollElement.nativeElement, {
      view: "",
      mask: Masking.OLL,
      case: "R U2 R' U' R U' R'"
    })

    cubePNG(this.pllElement.nativeElement, {
      view: "plan",
      mask: Masking.LL,
      case: "M2 U' M U2 M' U' M2"
    })
  }

}
