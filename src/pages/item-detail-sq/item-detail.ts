import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Itemssq } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemSQDetailPage {
  itemsq: any;

  constructor(public navCtrl: NavController, navParams: NavParams, itemssq: Itemssq) {
    this.itemsq = navParams.get('itemsq') || itemssq.defaultItemsq;
  }

}
