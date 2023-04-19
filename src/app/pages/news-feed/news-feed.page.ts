import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NewsFeedPage implements OnInit {
  page = 0;
  perPage = 10;
  array: any[] = [
    {
      "id": 1,
      "name": "Elma Herring",
      "email": "elmaherring@mail.in",
      "phone": "+1 (913) 497-2020"
    },
    {
      "id": 2,
      "name": "Knapp Berry",
      "email": "knappberry@mail.in",
      "phone": "+1 (951) 472-2967"
    },
    {
      "id": 3,
      "name": "Bell Burgess",
      "email": "bellburgess@mail.in",
      "phone": "+1 (887) 478-2693"
    },
    {
      "id": 4,
      "name": "Hobbs Ferrell",
      "email": "hobbsferrell@mail.in",
      "phone": "+1 (862) 581-3022"
    },
    {
      "id": 5,
      "name": "Marylou Medina",
      "email": "maryloumedina@mail.in",
      "phone": "+1 (996) 520-2967"
    },
    {
      "id": 6,
      "name": "Larson Guerra",
      "email": "larsonguerra@mail.in",
      "phone": "+1 (972) 566-2684"
    },
    {
      "id": 7,
      "name": "Shelby Ballard",
      "email": "shelbyballard@mail.in",
      "phone": "+1 (824) 467-3579"
    },
    {
      "id": 8,
      "name": "Lea Faulkner",
      "email": "leafaulkner@mail.in",
      "phone": "+1 (899) 528-3402"
    },
    {
      "id": 9,
      "name": "Cecelia Wolf",
      "email": "ceceliawolf@mail.in",
      "phone": "+1 (862) 507-3140"
    },
    {
      "id": 10,
      "name": "Melva Nixon",
      "email": "melvanixon@mail.in",
      "phone": "+1 (901) 444-3081"
    },
    {
      "id": 11,
      "name": "Bernard Chambers",
      "email": "bernardchambers@mail.in",
      "phone": "+1 (831) 539-3366"
    },
    {
      "id": 12,
      "name": "Wendi Bender",
      "email": "wendibender@mail.in",
      "phone": "+1 (868) 414-2720"
    },
    {
      "id": 13,
      "name": "Wall Stewart",
      "email": "wallstewart@mail.in",
      "phone": "+1 (814) 558-3191"
    },
    {
      "id": 14,
      "name": "Howell Gilbert",
      "email": "howellgilbert@mail.in",
      "phone": "+1 (926) 512-3631"
    },
    {
      "id": 15,
      "name": "Nguyen Maxwell",
      "email": "nguyenmaxwell@mail.in",
      "phone": "+1 (838) 469-2152"
    },
    {
      "id": 16,
      "name": "Norris Hendricks",
      "email": "norrishendricks@mail.in",
      "phone": "+1 (818) 563-2900"
    },
    {
      "id": 17,
      "name": "Salinas Mcleod",
      "email": "salinasmcleod@mail.in",
      "phone": "+1 (888) 413-3775"
    },
    {
      "id": 18,
      "name": "Michelle Barrett",
      "email": "michellebarrett@mail.in",
      "phone": "+1 (988) 446-2594"
    },
    {
      "id": 19,
      "name": "Burke Barlow",
      "email": "burkebarlow@mail.in",
      "phone": "+1 (965) 492-2552"
    },
    {
      "id": 20,
      "name": "Rosie Cummings",
      "email": "rosiecummings@mail.in",
      "phone": "+1 (845) 456-2237"
    },
    {
      "id": 21,
      "name": "Sanford Frye",
      "email": "sanfordfrye@mail.in",
      "phone": "+1 (936) 581-3494"
    },
    {
      "id": 22,
      "name": "Janna Peck",
      "email": "jannapeck@mail.in",
      "phone": "+1 (824) 512-2437"
    },
    {
      "id": 23,
      "name": "Lorraine Sykes",
      "email": "lorrainesykes@mail.in",
      "phone": "+1 (959) 422-3635"
    },
    {
      "id": 24,
      "name": "Vicki Fulton",
      "email": "vickifulton@mail.in",
      "phone": "+1 (916) 455-2402"
    },
    {
      "id": 25,
      "name": "Massey Moody",
      "email": "masseymoody@mail.in",
      "phone": "+1 (840) 453-3811"
    },
    {
      "id": 26,
      "name": "Grant Berg",
      "email": "grantberg@mail.in",
      "phone": "+1 (837) 554-3706"
    },
    {
      "id": 27,
      "name": "Hawkins Winters",
      "email": "hawkinswinters@mail.in",
      "phone": "+1 (945) 469-2432"
    },
    {
      "id": 28,
      "name": "Frazier Davidson",
      "email": "frazierdavidson@mail.in",
      "phone": "+1 (854) 558-2637"
    },
    {
      "id": 29,
      "name": "Francine Cervantes",
      "email": "francinecervantes@mail.in",
      "phone": "+1 (923) 520-2916"
    },
    {
      "id": 30,
      "name": "Francis Perez",
      "email": "francisperez@mail.in",
      "phone": "+1 (885) 461-3054"
    }
  ];
  lists: any[] = [];

  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
    this.lists = this.paginateArray();
  }

  logOut(){
    this.router.navigate(['login']);
  }

  paginateArray() {
    this.page++;
    return this.array.filter(
      x => x.id > (this.page * this.perPage - this.perPage) && x.id <= (this.page * this.perPage)
    );
  }

  loadMore(event:any) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if(array?.length < this.perPage) {
        event.target.disabled = true;
      };
    }, 1000);
 }

}
