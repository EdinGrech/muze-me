import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { News } from '../interfaces/news';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadNews } from '../state/news/news.actions';

import { NewsCardComponent } from './components/news-card/news-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SideBarComponent, NewsCardComponent],
})
export class HomePage implements OnInit {
  constructor(private store: Store<{auth:any, news: any}>,) {}
  newsList$:News[] = [];
  newNewsList$:Observable<News[]> = this.store.select(state => state.news.news);
  error$:any = this.store.select(state => state.news.error);
  loading$:any = this.store.select(state => state.news.loading);

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const page = (this.newsList$.length / 10)+1;
    this.store.dispatch(loadNews({ page: page, tollerance: 0 }));//to get tollerence from  user at some point
    this.newNewsList$.subscribe((news:News[]) => {
      console.log(news);
      this.newsList$ = this.newsList$.concat(news);
    }
    );
  }

  onIonInfinite(ev: Event) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
