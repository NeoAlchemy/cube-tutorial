import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-horizontal-picker',
  templateUrl: './simple-horizontal-picker.component.html',
  styleUrls: ['./simple-horizontal-picker.component.less']
})
export class SimpleHorizontalPickerComponent implements OnInit {

  @Input() values: string[] = [];
  index = 0;

  constructor() { }

  ngOnInit(): void {  
  }

  left(): void {
    this.baseMovement((i: number) => {
      return (i != 0) ? i - 1 : 0;
    })
  }

  right(): void {
    this.baseMovement((i: number) => {
      return (i != this.values.length - 1) ? i + 1 : i;
    })
  }

  baseMovement(uniqueFunctionality: Function) {
    this.index = uniqueFunctionality(this.index);
  }

  getLeftColor(): string {
    return (this.index == 0) ? "disabled" : "primary";
  }

  getRightColor(): string {
    return (this.index == this.values.length - 1) ? "disabled" : "primary";
  }

  /*left(algorithm: string): void {
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
  }*/

}
