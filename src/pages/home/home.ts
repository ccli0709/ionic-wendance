import { Component, OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';

import { News } from '../../app/models/news';
import { NewsService } from '../../app/services/news.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  // items: News[];
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private newsSerivce: NewsService, afDB: AngularFireDatabase) {
    this.items = afDB.list('/wendance/news', {
      query: {
        orderByKey: true
      }
    });
  }

  //getNews(): void {
  //  this.newsSerivce.getNews().then(news => this.items = news);
  //}
  ngOnInit(): void {
    //this.getNews();
  }
}
