import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab, Tabs } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabAritclePage } from '../pages/tab-aritcle/tab-aritcle';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabsPage } from '../pages/tabs/tabs';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabCoirsePage } from '../pages/tab-coirse/tab-coirse';

@NgModule({
  declarations: [
    MyApp,
  TabHomePage,
  TabAritclePage,
  TabContactPage,
  TabServicePage,
  TabCoirsePage,
  TabsPage,
  SidePaymentPage,
  SidePortfolioPage,
  SideSchedulePage,
  SideSettingPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabHomePage,
    TabAritclePage,
    TabContactPage,
    TabServicePage,
    TabsPage,
    TabCoirsePage,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
