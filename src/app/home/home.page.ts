import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}

  slideOpts = {
    slidesPerView: 1,
    ceteredSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true,
  }
  @ViewChild(IonContent) content: IonContent;

  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToTop(500);
  }
  
}
