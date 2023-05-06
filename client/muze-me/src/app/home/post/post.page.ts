import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { newsPost } from 'src/app/interfaces/news-post';
import { News } from 'src/app/interfaces/news';
import { selectNewsFullData } from 'src/app/state/post/post.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PostPage implements OnInit {
  post$: Observable<newsPost> = this.store.select(selectNewsFullData);

  news: News = {
    id: 0,
    source_id: null,
    source_name: null,
    author: null,
    title: '',
    description: '',
    url: '',
    urlToImage: null,
    publishedAt: '',
    content: null,
    sentement: 0,
    list_of_keywords: '',
  };
  showSource_name: boolean = false;
  showAuthor: boolean = false;

  showPublishedAt: boolean = false;
  publishedAt: string = '';

  showSentement: boolean = false;
  sentimentEmoji: string = '';

  showList_of_keywords: boolean = false;
  keywords: string[] = [];

  loading : boolean = true;

  constructor(
    private store: Store<{ post: any, auth:any, news:any }>,
    private router: Router,
  ) {
    this.post$.subscribe((post: newsPost) => {
      this.news = post.news;
      this.showSource_name = post.showSource_name;
      this.showAuthor = post.showAuthor;
      this.showPublishedAt = post.showPublishedAt;
      this.publishedAt = post.publishedAt;
      this.showSentement = post.showSentement;
      this.sentimentEmoji = post.sentimentEmoji;
      this.showList_of_keywords = post.showList_of_keywords;
      this.keywords = post.keywords;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/news/home'])
  }
}
