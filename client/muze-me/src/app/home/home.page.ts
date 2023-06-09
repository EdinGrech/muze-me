import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { News, NewsCardData } from '../interfaces/news';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadNews } from '../state/news/news.actions';

import { NewsCardComponent } from './components/news-card/news-card.component';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { storeNewsPost } from '../state/post/post.actions';

import { selectNewsFullData } from '../state/post/post.selectors';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule,
    IonicModule,
    CommonModule,
    FormsModule,
    SideBarComponent,
    NewsCardComponent,
  ],
})
export class HomePage implements OnInit {
  constructor(
    private store: Store<{ auth: any; news: any; post: any }>,
    private router: Router
  ) {
    this.newNewsList$.subscribe((news: News[]) => {
      console.log(news);
      this.newsList$ = this.newsList$.concat(news);
      console.log(this.newsList$);
    });
    this.loading$.subscribe((loading: boolean) => {
      if(loading){
        this.persieved_loading = true; 
      } else {
      setTimeout(() => {
        if(this.firstLoadLoadingStatus_changeOnRegenOnly){
          this.firstLoadLoadingStatus_changeOnRegenOnly = false;
        }
        this.persieved_loading = loading;
      }, 1500);
    }
    });
  }
  millisecontTime = Date.now();
  persieved_loading = false;
  firstLoadLoadingStatus_changeOnRegenOnly = true;
  newsList$: News[] = [];
  newNewsList$: Observable<News[]> = this.store.select(
    (state) => state.news.news
  );
  error$: any = this.store.select((state) => state.news.error);
  loading$: Observable<boolean> = this.store.select((state) => state.news.loading);
  user$: Observable<User> = this.store.select((state) => state.auth.user);

  ngOnInit() {
    this.user$.subscribe((user: any) => {
      if (user) {
        this.generateItems();
      }
    });
  }

  private generateItems() {
    //get page number per page 10 items, round if needed
    const page = Math.floor(this.newsList$.length / 10) + 1;
    let tollerance: number;
    this.user$.subscribe((user: any) => {
      if (user) {
        tollerance = user.news_tollerance;
      }
    });
    this.store.dispatch(loadNews({ page: page, tollerance: tollerance! })); //to get tollerence from  user at some point
  }

  onIonInfinite(ev: Event) {
    //delay as to not blast server with requests
    setTimeout(() => {
      this.generateItems();
      (ev.target as HTMLIonInfiniteScrollElement).complete();
    }, 100);
  }

  lastScrollSpot: number = 0;
  onScroll(event: any) {
    const scrollPosition = event.detail.scrollTop;
    const fab = document.querySelector('ion-fab');
    if (scrollPosition < this.lastScrollSpot) {
      fab?.classList.add('show');
    } else {
      fab?.classList.remove('show');
    }
    this.lastScrollSpot = scrollPosition;
  }

  @ViewChild(IonContent) content!: IonContent;
  scrollToTop() {
    this.content.scrollToTop(this.newsList$.length * 20);
  }

  handleRefresh(event: any) {
    this.newsList$ = [];
    this.generateItems();
    this.firstLoadLoadingStatus_changeOnRegenOnly = true;
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  routeTodetailedView(event: NewsCardData) {
    this.store.dispatch(storeNewsPost({ newsFullData: event }));
    this.store.select(selectNewsFullData).subscribe((post: any) => { 
      this.router.navigate(['/news/post', event.news.id]);
    });
  }
}
