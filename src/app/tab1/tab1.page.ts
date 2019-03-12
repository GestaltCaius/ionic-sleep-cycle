import {
  Component,
  OnInit,
  ModuleWithComponentFactories
} from '@angular/core';

import * as moment from 'moment';
import {
  Moment
} from 'moment'; // type

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private readonly CYCLES = 6;

  public timeSelected: Moment;
  public cycleList: Moment[];

  ngOnInit(): void {
    this.timeSelected = moment();

    this.cycleList = [];
    for (let i = 1; i <= this.CYCLES; i++) {
      this.cycleList.push(this.timeSelected.clone().add(i * 90, 'minutes'));
    }

    console.log(this.cycleList)
  }
}