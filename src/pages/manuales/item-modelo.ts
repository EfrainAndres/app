import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Manuales } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ManualPage {
  manual: any;

  constructor(public navCtrl: NavController, navParams: NavParams, manuales: Manuales) {
    this.manual = navParams.get('manual') || manuales.defaultManual;
  }

}
