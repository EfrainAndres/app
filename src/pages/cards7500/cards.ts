import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { ManualPage } from '../manuales/item-modelo';

import { Manual7000Page } from '../manuales7000/item-modelo';

import { Manual7500Page } from '../manuales7500/item-modelo';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { Manuales7500 } from '../../providers/providers';

import { Manual7500 } from '../../models/manuales7500';

@Component({
  selector: 'cards-7500-page',
  templateUrl: 'cards.html'
})
export class Cards7500Page {
  currentItems: Item[];
  currentManuales7500: Manual7500[];

  constructor(public navCtrl: NavController, public items: Items,public manuales7500: Manuales7500, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    this.currentManuales7500 = this.manuales7500.query();
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
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  openManual7500(manual7500: Manual7500) {
    this.navCtrl.push(Manual7500Page, {
      manual7500: manual7500
    });
  }
}
