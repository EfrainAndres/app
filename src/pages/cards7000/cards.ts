import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { ManualPage } from '../manuales/item-modelo';

import { Manual7000Page } from '../manuales7000/item-modelo';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { Manuales } from '../../providers/providers';

import { Manual } from '../../models/manuales';

import { Manuales7000 } from '../../providers/providers';

import { Manual7000 } from '../../models/manuales7000';

@Component({
  selector: 'cards-7000-page',
  templateUrl: 'cards.html'
})
export class Cards7000Page {
  currentItems: Item[];
  currentManuales7000: Manual7000[];

  constructor(public navCtrl: NavController, public items: Items,public manuales7000: Manuales7000, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
    this.currentManuales7000 = this.manuales7000.query();
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

  openManual7000(manual7000: Manual7000) {
    this.navCtrl.push(Manual7000Page, {
      manual7000: manual7000
    });
  }
}
