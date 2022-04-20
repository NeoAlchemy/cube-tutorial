import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { cubePNG, Masking, Face } from 'sr-visualizer';

@Component({
  selector: 'app-beginner-cross',
  templateUrl: './beginner-cross.component.html',
  styleUrls: ['./beginner-cross.component.less']
})
export class BeginnerCrossComponent implements AfterViewInit {

  @ViewChild("cross") crossElement!: ElementRef;

  ngAfterViewInit(): void {
    cubePNG(this.crossElement.nativeElement, {
      view: "",
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
  }

}
