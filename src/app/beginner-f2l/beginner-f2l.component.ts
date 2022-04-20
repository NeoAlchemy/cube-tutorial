import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { cubePNG, Masking, Face } from 'sr-visualizer';

@Component({
  selector: 'app-beginner-f2l',
  templateUrl: './beginner-f2l.component.html',
  styleUrls: ['./beginner-f2l.component.less']
})
export class BeginnerF2lComponent implements AfterViewInit {

  @ViewChild("f2l") f2lElement!: ElementRef;

  ngAfterViewInit(): void {
    cubePNG(this.f2lElement.nativeElement, {
      mask: Masking.F2L3,
    })
  }

}
