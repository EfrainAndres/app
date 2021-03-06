import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardsPage } from '../pages/cards/cards';
import { Cards7000Page } from '../pages/cards7000/cards';
import { Cards7500Page } from '../pages/cards7500/cards';
import { ContentPage } from '../pages/content/content';
import { FirstRunPage } from '../pages/pages';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ListCincoMasterPage } from '../pages/list-master-cinco/list-master';
import { ListSQMasterPage } from '../pages/list-master-sq/list-master';
import { LoginPage } from '../pages/login/login';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemCincoDetailPage } from '../pages/item-detail-cinco/item-detail';
import { ItemSQDetailPage } from '../pages/item-detail-sq/item-detail';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
//import { CincomilPage } from '../pages/manual-5000/5000';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Menú</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
        <ion-icon [name]="p.icon" item-left></ion-icon>
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Inicio', icon:'aperture', component: ListMasterPage },
    //{ title: 'Tutorial', component: TutorialPage },
    //{ title: 'Welcome', component: WelcomePage },
    //{ title: 'Tabs', component: TabsPage },
    { title: 'Mantenimiento APX 5000', icon:'md-build', component: CardsPage },
    { title: 'Mantenimiento APX 7000', icon:'ios-construct-outline', component: ListCincoMasterPage },
    { title: 'Mantenimiento APX 7500', icon:'md-settings', component: ListSQMasterPage },
    //{ title: 'Mantenimiento APX 5000', component: CincomilPage },
    { title: 'Ayudas Audio-Visuales', icon:'logo-youtube', component: ContentPage },
    //{ title: 'Signup', component: SignupPage },
    //{ title: 'Eleméntos Comúnes', component: MapPage },
    //{ title: 'Menu', component: MenuPage },
    { title: 'Programa Informatico APX CPS', icon:'md-cloud-download', component: SettingsPage },
    //{ title: 'Search', component: SearchPage },
    //{ title: 'Programa Informatico APX CPS ', icon:'md-cloud-download', component: MapPage },
    { title: 'Salir', icon:'md-log-out', component: LoginPage },
  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
