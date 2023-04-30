import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { News } from '../interfaces/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SideBarComponent],
})
export class HomePage implements OnInit {
  constructor() {}
  newsList:News[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = (this.newsList.length / 10);
    
  }

  onIonInfinite(ev: Event) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
