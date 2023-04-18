import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ResetPageForm } from './reset-password.page.form';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ResetPasswordPage implements OnInit {
  form!: FormGroup ;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = new ResetPageForm(this.formBuilder).createForm();
  }
  logOut(){
    this.router.navigate(['login']);
  }
}
