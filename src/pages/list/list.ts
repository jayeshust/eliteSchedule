import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Spinner } from 'ionic-angular';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public studentData: any;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private eliteApi: EliteApiProvider, public loadingIndicator: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
  
    
  }
  ionViewDidLoad(){
   
    let loader = this.loadingIndicator.create({

      content: "getting data...",
      spinner: ""
    });

    loader.present().then(() => {
      this.eliteApi.getData().then(data => this.studentData = data);
      loader.dismiss();
    })

    
    console.log("page Loaded");
   

  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    console.log(item);
    this.navCtrl.push(HomePage, {
      //item: item
    });
  }
}
