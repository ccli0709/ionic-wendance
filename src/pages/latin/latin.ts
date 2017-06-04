import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-latin',
  templateUrl: 'latin.html'
})
export class LatinPage {
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
    this.items = afDB.list('/heroes', {
      query: {
        orderByChild: 'mp'
      }
    });
  }
}
