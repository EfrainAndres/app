import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Manuales7500 } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class Manual7500Page {
  manual7500: any;

  constructor(public navCtrl: NavController, navParams: NavParams, manuales: Manuales7500) {
    this.manual7500 = navParams.get('manual7500') || manuales.defaultManual7500;
  }

}
