import { Component, OnInit, ViewChild, } from '@angular/core';
import {IonSearchbar} from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
//this is for searching 
  @ViewChild('search',{static: false}) search: IonSearchbar;
 
 public list:Array<Object> =[];
 private searchedItem:any;

  constructor() {
    this.list =[

      {title:"Hagia Sophia"},
      {title:"Gereme Fairy Chimneys"},
      {title:"Library of Celsus"},
      {title:"Blue Mosque"},
      {title:"Oludeniz"},
      {title:"Mount Nemrut"},
      {title:"Bordrum Castle"},
      {title:"Pamukkale"},
      {title:"Patara Beach"},
      {title:"Aspendos Theatre"},
      {title:"Manti"},
      {title:"Meze"},
      {title:"Kumpir"},
      {title:"Lahmacun"},
      {title:"Iskender Kebap"},
      {title:"Ayran"},
      {title:"Boza"},
      {title:"Efes Pilsen"},
      {title:"Turkish Raki"},
      {title:"Salgam Suyu"},
      {title:"Divan Cave Hotel"},
      {title:"Romance Istanbul Hotel"},
      {title:"Conrad Istanbul Bosphorus"},
      {title:"Concorde De Luxe Resort"},
      {title:"Hotel Amira Istanbul"}
    ];
    this.searchedItem = this.list
   }

  ngOnInit() {
  }
  ionViewEnter(){
    setTimeout(() => {

      this.search.setFocus();
    });
  }
_ionChange(event){

const val = event.target.value;

this.searchedItem = this.list;

if(val && val.trim() !=''){
this.searchedItem = this.searchedItem.filter((item: any)=>{

  return(item.title.toLowerCase().indexOf(val.toLowerCase()) > - 1);
});
}
}
}
