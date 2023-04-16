import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonToast, IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  form!: FormGroup ;

  constructor(private router: Router
    , private formBuilder:FormBuilder) 
    { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    
   
  }

  logIn(){
    this.router.navigate(['home']);
  }

  register(){
    this.router.navigate(['register']);
  }

}
