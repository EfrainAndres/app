import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListMasterPage } from '../list-master/list-master';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController) { }

  backButtonClick(){
    this.navCtrl.setRoot(ListMasterPage, {}, {
      animate: true,
      direction: 'backward'
    });
  }

}
