import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { Cards7000Page } from '../pages/cards7000/cards';
import { Cards7500Page } from '../pages/cards7500/cards';
import { ContentPage } from '../pages/content/content';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemCincoDetailPage } from '../pages/item-detail-cinco/item-detail';
import { ItemSQDetailPage } from '../pages/item-detail-sq/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ListCincoMasterPage } from '../pages/list-master-cinco/list-master';
import { ListSQMasterPage } from '../pages/list-master-sq/list-master';
import { ManualPage } from '../pages/manuales/item-modelo';
import { Manual7000Page } from '../pages/manuales7000/item-modelo';
import { Manual7500Page } from '../pages/manuales7500/item-modelo';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
//import { CincomilPage } from '../pages/manual-5000/5000';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Itemscinco } from '../mocks/providers/itemscinco';
import { Itemssq } from '../mocks/providers/itemssq';
import { Manuales } from '../mocks/providers/manuales';
import { Manuales7000 } from '../mocks/providers/manuales7000';
import { Manuales7500 } from '../mocks/providers/manuales7500';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { YoutubePipe } from '../pipes/youtube/youtube';

import { InAppBrowser } from '@ionic-native/in-app-browser';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    Cards7000Page,
    Cards7500Page,
    ContentPage,
    ItemCreatePage,
    ItemDetailPage,
    ItemCincoDetailPage,
    ItemSQDetailPage,
    ListMasterPage,
    ListCincoMasterPage,
    ListSQMasterPage,
    ManualPage,
    Manual7000Page,
    Manual7500Page,
    LoginPage,
    MapPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WelcomePage,
    YoutubePipe,
    //CincomilPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    Cards7000Page,
    Cards7500Page,
    ContentPage,
    ItemCreatePage,
    ItemDetailPage,
    ItemCincoDetailPage,
    ItemSQDetailPage,
    ListMasterPage,
    ListCincoMasterPage,
    ListSQMasterPage,
    ManualPage,
    Manual7000Page,
    Manual7500Page,
    LoginPage,
    MapPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WelcomePage,
    //CincomilPage,
  ],
  providers: [
    Api,
    Items,
    Itemscinco,
    Itemssq,
    Manuales,
    Manuales7000,
    Manuales7500,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    InAppBrowser,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
