import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LectureComponent } from 'src/app/components/lecture/lecture.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,LectureComponent]
})

export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
