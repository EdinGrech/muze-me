import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { UserLoginInterface, UserRegisterInterface } from '../interfaces/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthPage implements OnInit {
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() { }

  change(event: any) {
    this.screen = event;
  }

  login() {
    var formData_: any = new FormData();
    this.isLoading = true
    formData_.append('email', this.formData.get('email')!.value);
    formData_.append('password', this.formData.get('password')!.value);
    this.auth.signInWithEmail(formData_.get('email'), formData_.get('password')).subscribe((res) => {
      console.log(res);
      if (res.status == 200) {
        console.log("Logged in");
      }else{
        console.log(res.statusTest)
      }
      this.isLoading = false
    }
    );
  }

  register() {
    var formData: any = new FormData();
    if (this.formData.valid) {
      this.isLoading = true
      formData.append('name', this.formData.get('name')!.value);
      formData.append('email', this.formData.get('email')!.value);
      formData.append('password', this.formData.get('password')!.value);

      const user: UserRegisterInterface = {
        username: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        tollerance: 0
      };
      
      this.auth.signUp(user).subscribe((res) => {
        console.log(res);
        this.isLoading = false
        this.screen = 'signin';
      }
      );
    }
  }
}