import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoaderPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {

   this.router.navigateByUrl('/login')
    // setInterval(()=>{
    //   this.router.navigateByUrl('/login');
    // },500)
  }
  


}
