import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  signUp(email: string, password: string, username: string) {
    return
  }

  signInWithEmail(email: string, password: string) {
    return
  }

  logout() {
    
  }

  get currentUser() {
    return
  }
}
