import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemCincoDetailPage } from '../item-detail-cinco/item-detail';

import { ManualPage } from '../manuales/item-modelo';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { Itemscinco } from '../../providers/providers';

import { Itemcinco } from '../../models/itemcinco';

import { Manuales } from '../../providers/providers';

import { Manual } from '../../models/manuales';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListCincoMasterPage {
  currentItemscinco: Itemcinco[];
  currentManuales: Manual[];

  constructor(public navCtrl: NavController, public itemscinco: Itemscinco,public manuales: Manuales, public modalCtrl: ModalController) {
    this.currentItemscinco = this.itemscinco.query();
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
        this.itemscinco.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItemcinco(itemcinco) {
    this.itemscinco.delete(itemcinco);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItemcinco(itemcinco: Itemcinco) {
    this.navCtrl.push(ItemCincoDetailPage, {
      itemcinco: itemcinco
    });
  }

  openManual(manual: Manual) {
    this.navCtrl.push(ManualPage, {
      manual: manual
    });
  }
}
