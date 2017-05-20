import { Component, OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';

import { News } from '../../app/models/news';
import { NewsService } from '../../app/services/news.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  items: News[];

  constructor(public navCtrl: NavController, private newsSerivce: NewsService) { }

  getNews(): void {
    this.newsSerivce.getNews().then(news => this.items = news);
  }
  ngOnInit(): void {
    this.getNews();
  }
}
