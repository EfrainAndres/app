import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { ManualPage } from '../manuales/item-modelo';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { Manuales } from '../../providers/providers';

import { Manual } from '../../models/manuales';

import { ListMasterPage } from '../list-master/list-master';

@Component({
  selector: 'cards-page',
  templateUrl: 'cards.html'
})
export class CardsPage {
  currentItems: Item[];
  currentManuales: Manual[];

  constructor(public navCtrl: NavController, public items: Items,public manuales: Manuales, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
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

  openManual(manual: Manual) {
    this.navCtrl.push(ManualPage, {
      manual: manual
    });
  }

  backButtonClick(){
    this.navCtrl.setRoot(ListMasterPage, {}, {
      animate: true,
      direction: 'backward'
    });
  }
}
