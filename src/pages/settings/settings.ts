import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { NavController } from 'ionic-angular';

import { ListMasterPage } from '../list-master/list-master';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
    url: string;  
  
  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController) { }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);

   // Inject scripts, css and more with browser.X
  }

  backButtonClick(){
    this.navCtrl.setRoot(ListMasterPage, {}, {
      animate: true,
      direction: 'backward'
    });
  }
}
