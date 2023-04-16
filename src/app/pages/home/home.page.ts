import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LectureComponent } from 'src/app/components/lecture/lecture.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,LectureComponent]
})

export class HomePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigate(['login']);
  }

  goToLocation(){
    this.router.navigate(['location']);
  }
}
