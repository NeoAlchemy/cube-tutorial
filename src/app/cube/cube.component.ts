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
  @Input() mask: string = "";

  constructor(public element: ElementRef) {}
}
