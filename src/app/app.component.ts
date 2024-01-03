import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  //this is to switch light mode and darkmode event
  toggleTheme(event){
   
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }else{
      document.body.setAttribute('color-theme','light')
    }
  }
}
