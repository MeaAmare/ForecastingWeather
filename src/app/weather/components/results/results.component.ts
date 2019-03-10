import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Weather } from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  
  @Input() cities: Array<Weather>;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      let change = changes[propName];
      this.cities = change.currentValue;
    }
 }
}


