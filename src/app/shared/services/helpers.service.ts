import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  toInches(cm: number): number {
    return Math.round(cm * 0.393701);
  }

  toCm(inches: number): number {
    return Math.round(inches * 2.54);
  }

} // end class
