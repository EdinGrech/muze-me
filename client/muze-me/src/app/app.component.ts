import { RouterLink } from '@angular/router';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, HttpClientModule],
  providers: [AuthService],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector); //some more looking up what this dose it required
  constructor() {}
}
