import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { News } from '../../../interfaces/news';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class NewsCardComponent {
  @Input() news!: News;
  constructor() {}
  routerLink: string = "";

  showSource_name: boolean = false; 
  showAuthor: boolean = false; 

  showPublishedAt: boolean = false;
  publishedAt: string = "";

  showSentement: boolean = false;
  sentimentEmoji: string = "";

  showList_of_keywords: boolean = false;
  keywords: string[] = [];

  ngOnInit() {
    if(this.news.source_name != null && this.news.source_name.length < 40) {
      this.showSource_name = true;
    }
    if(this.news.author != null && this.news.author.length < 40) {
      this.showAuthor = true;
    }
    if(this.news.publishedAt != null) {
      this.showPublishedAt = true;
      let date = new Date(this.news.publishedAt);
      this.publishedAt = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    }
    if(this.news.sentement != null) {
      this.showSentement = true;
      if(this.news.sentement < -0.5) {
        this.sentimentEmoji = "😢";
      } else if(this.news.sentement < 0) {
        this.sentimentEmoji = "😔";
      } else if(this.news.sentement < 0.5) {
        this.sentimentEmoji = "😐";
      } else {
        this.sentimentEmoji = "😃";
      }
    }
    if(this.news.list_of_keywords != null && this.news.list_of_keywords != "") {
      this.showList_of_keywords = true;
      this.keywords = this.news.list_of_keywords.split(" ");
    }
    this.routerLink = "/news/post/" + this.news.id;
  }
}
