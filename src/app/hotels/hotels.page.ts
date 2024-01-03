import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
