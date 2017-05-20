import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

import { LatinPage } from '../latin/latin';
import { ModernPage } from '../modern/modern';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LatinPage;
  tab3Root = ModernPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
