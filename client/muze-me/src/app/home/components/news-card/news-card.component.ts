import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { News } from '../../../interfaces/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,],
})
export class NewsCardComponent{
  @Input() news!: News;
  constructor() { }

  ngOnInit() {}

}
