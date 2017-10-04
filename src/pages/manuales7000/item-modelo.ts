import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Manuales7000 } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class Manual7000Page {
  manual7000: any;

  constructor(public navCtrl: NavController, navParams: NavParams, manuales7000: Manuales7000) {
    this.manual7000 = navParams.get('manual7000') || manuales7000.defaultManual7000;
  }

}
