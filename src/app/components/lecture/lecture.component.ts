import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LectureComponent implements OnInit {

  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  @Input() subject: string = "Programming Fundamentals";
  @Input() date: string = "4/13/2023";
  @Input() time: string = "08:32 AM";
  @Input() detail: string = "BS Computer Science Fall 2019";
  constructor() { }

  ngOnInit() { }

}
