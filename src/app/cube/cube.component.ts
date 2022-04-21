import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.less']
})
export class CubeComponent {
  @Input() notation: string = "";
  @Input() arrows: string = "";
  @Input() orient: string = "";

  constructor(public element: ElementRef) {}
}
