import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemSQDetailPage } from '../item-detail-sq/item-detail';

import { ManualPage } from '../manuales/item-modelo';

import { Itemssq } from '../../providers/providers';

import { Itemsq } from '../../models/itemsq';

import { Itemscinco } from '../../providers/providers';

import { Itemcinco } from '../../models/itemcinco';

import { Manuales } from '../../providers/providers';

import { Manual } from '../../models/manuales';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListSQMasterPage {
  currentItemssq: Itemsq[];
  currentManuales: Manual[];

  constructor(public navCtrl: NavController, public itemssq: Itemssq,public manuales: Manuales, public modalCtrl: ModalController) {
    this.currentItemssq = this.itemssq.query();
    this.currentManuales = this.manuales.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItemcinco() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.itemssq.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItemcinco(itemsq) {
    this.itemssq.delete(itemsq);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItemsq(itemsq: Itemsq) {
    this.navCtrl.push(ItemSQDetailPage, {
      itemsq: itemsq
    });
  }

  openManual(manual: Manual) {
    this.navCtrl.push(ManualPage, {
      manual: manual
    });
  }
}
