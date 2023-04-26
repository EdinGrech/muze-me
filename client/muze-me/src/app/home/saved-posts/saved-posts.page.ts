import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-saved-posts',
  templateUrl: './saved-posts.page.html',
  styleUrls: ['./saved-posts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SideBarComponent]
})
export class SavedPostsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
