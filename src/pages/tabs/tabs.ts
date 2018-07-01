import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabAritclePage } from '../tab-aritcle/tab-aritcle';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabServicePage } from '../tab-service/tab-service';
import { TabCoirsePage } from '../tab-coirse/tab-coirse';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any =TabHomePage;
  tab2Root: any =TabAritclePage;
  tab3Root: any =TabContactPage;
  tab4Root: any =TabServicePage;
  tab5Root: any =TabCoirsePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
