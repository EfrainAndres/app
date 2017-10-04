import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Itemscinco } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemCincoDetailPage {
  itemcinco: any;

  constructor(public navCtrl: NavController, navParams: NavParams, itemscinco: Itemscinco) {
    this.itemcinco = navParams.get('itemcinco') || itemscinco.defaultItemcinco;
  }

}
 
