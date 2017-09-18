import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<h1>App works !</h1>',
  // styleUrls: ['app.component.css']
})
export default class AppComponent {
    constructor() {
        console.log('App Component');
    }
}
